    const int nth = tptg.x*tptg.y;
    const int ith = tptg.y*tpitg.x + tpitg.y;
typedef struct {
    uint8_t hmask[QK_K/8];     // quants - high bit
    uint8_t qs[QK_K/4];        // quants - low 2 bits
    uint8_t scales[3*QK_K/64]; // scales, quantized with 6 bits
    half d;                    // super-block scale
} block_q3_k;

static void dequantize_row_q3_k(device const block_q3_k * x, device float * y, int k) {
    assert(k % QK_K == 0);
    const int nb = k / QK_K;

    const uint32_t kmask1 = 0x03030303;
    const uint32_t kmask2 = 0x0f0f0f0f;

    uint32_t aux[4];

    for (int i = 0; i < nb; i++) {

        const float d_all = (float)x[i].d;

        device const uint8_t * q = x[i].qs;
        device const uint8_t * hm = x[i].hmask;
        uint8_t m = 1;

        device const uint32_t * a = (device const uint32_t *)x[i].scales;
        uint32_t tmp = a[2];
        aux[2] = ((a[0] >> 4) & kmask2) | (((tmp >> 4) & kmask1) << 4);
        aux[3] = ((a[1] >> 4) & kmask2) | (((tmp >> 6) & kmask1) << 4);
        aux[0] = (a[0] & kmask2) | (((tmp >> 0) & kmask1) << 4);
        aux[1] = (a[1] & kmask2) | (((tmp >> 2) & kmask1) << 4);

        char4 scales;

        int ia = 0;
        int is = 4;
        float dl;
        for (int n = 0; n < QK_K; n += 128) {
            int shift = 0;
            for (int j = 0; j < 4; ++j) {

                if (is == 4) {
                    scales = as_type<char4>(aux[ia++]);
                    is = 0;
                }

                dl = d_all * (scales[is++] - 32);
                for (int l = 0; l < 16; ++l) {
                    *y++ = dl * ((int8_t)((q[l+ 0] >> shift) & 3) - ((hm[l+ 0] & m) ? 0 : 4));
                }

                dl = d_all * (scales[is++] - 32);
                for (int l = 0; l < 16; ++l) {
                    *y++ = dl * ((int8_t)((q[l+16] >> shift) & 3) - ((hm[l+16] & m) ? 0 : 4));
                }

                shift += 2;
                m <<= 1;
            }
            q += 32;
        }

    }

}

kernel void kernel_get_rows_q3_k(
        device const  void * src0,
        device const   int * src1,
        device       float * dst,
        constant   int64_t & ne00,
        constant  uint64_t & nb01,
        constant  uint64_t & nb1,
        uint tpig[[thread_position_in_grid]]) {
    const int i = tpig;
    const int r = ((device int32_t *) src1)[i];

    dequantize_row_q3_k(
            (device const block_q3_k *) ((device char *) src0 + r*nb01),
                       (device float *) ((device char *)  dst + i*nb1), ne00);
}

}
kernel void kernel_mul_mat_q3_k_f32(
        device const  void * src0,
        device const float * src1,
        device       float * dst,
        constant   int64_t & ne00,
        constant   int64_t & ne01,
        constant  uint64_t & nb00,
        constant  uint64_t & nb01,
        constant  uint64_t & nb02,
        constant   int64_t & ne10,
        constant   int64_t & ne11,
        constant  uint64_t & nb10,
        constant  uint64_t & nb11,
        constant  uint64_t & nb12,
        constant   int64_t & ne0,
        constant   int64_t & ne1,
        threadgroup float  * sum [[threadgroup(0)]],
        uint2 tgpig[[threadgroup_position_in_grid]],
        uint2  tpig[[thread_position_in_grid]],               // we don't use this for now
        uint2 tpitg[[thread_position_in_threadgroup]],
        uint2  tptg[[threads_per_threadgroup]]) {

    const int nb = ne00/QK_K;

    const int64_t r0 = tgpig.x;
    const int64_t r1 = tgpig.y;

    device const block_q3_k * x = (device const block_q3_k *) src0 + r0*nb;
    device const float     * yy = (device const float      *) src1 + r1*ne10;

    const int nth = tptg.x*tptg.y;
    const int ith = tptg.y*tpitg.x + tpitg.y;

    const int step = QK_K / tptg.y;     // we expect this to be 16
    const int iqs  = step * tpitg.y;    // 0...240 in steps of 16
    const int ip   = iqs / 128;         // 0 or 1
    const int il   = (iqs - 128*ip)/16; // 0...7
    const int n    = 4;
    const int l0   = n * il;
    const int is   = l0/16;
    const uint8_t m = 1 << (4*ip);
    //const int shift1 = 4*ip;
    //const int shift2 = 4*ip + 2;

    int8_t sc[4];

    float sumf = 0;
    for (int i = tpitg.x; i < nb; i += tptg.x) {

        device const uint8_t * q  = x[i].qs + 32*ip + l0;
        device const uint8_t * hm = x[i].hmask + l0;
        device const uint8_t * scales = x[i].scales + is;

        device const float * y = yy + i * QK_K + 128*ip + l0;

        const float dall = x[i].d;

        //sc[0] = ((scales[ 8] >> shift1) & 3) << 4;
        //sc[1] = ((scales[10] >> shift1) & 3) << 4;
        //sc[2] = ((scales[ 8] >> shift2) & 3) << 4;
        //sc[3] = ((scales[10] >> shift2) & 3) << 4;
        //if (ip == 0) {
        //    sc[0] |= (scales[0] & 0xF);
        //    sc[1] |= (scales[2] & 0xF);
        //    sc[2] |= (scales[4] & 0xF);
        //    sc[3] |= (scales[6] & 0xF);
        //} else {
        //    sc[0] |= (scales[0] >>  4);
        //    sc[1] |= (scales[2] >>  4);
        //    sc[2] |= (scales[4] >>  4);
        //    sc[3] |= (scales[6] >>  4);
        //}
        if (ip == 0) {
            sc[0] = (scales[0] & 0xF) | (((scales[ 8] >> 0) & 3) << 4);
            sc[1] = (scales[2] & 0xF) | (((scales[10] >> 0) & 3) << 4);
            sc[2] = (scales[4] & 0xF) | (((scales[ 8] >> 2) & 3) << 4);
            sc[3] = (scales[6] & 0xF) | (((scales[10] >> 2) & 3) << 4);
        } else {
            sc[0] = (scales[0] >>  4) | (((scales[ 8] >> 4) & 3) << 4);
            sc[1] = (scales[2] >>  4) | (((scales[10] >> 4) & 3) << 4);
            sc[2] = (scales[4] >>  4) | (((scales[ 8] >> 6) & 3) << 4);
            sc[3] = (scales[6] >>  4) | (((scales[10] >> 6) & 3) << 4);
        }

        float4 sums = {0.f, 0.f, 0.f, 0.f};
        for (int l = 0; l < n; ++l) {
            sums[0] += y[l+ 0] * ((int8_t)((q[l] >> 0) & 3) - (hm[l] & (m << 0) ? 0 : 4));
            sums[1] += y[l+32] * ((int8_t)((q[l] >> 2) & 3) - (hm[l] & (m << 1) ? 0 : 4));
            sums[2] += y[l+64] * ((int8_t)((q[l] >> 4) & 3) - (hm[l] & (m << 2) ? 0 : 4));
            sums[3] += y[l+96] * ((int8_t)((q[l] >> 6) & 3) - (hm[l] & (m << 3) ? 0 : 4));
        }

        sumf += dall * (sums[0] * (sc[0] - 32) + sums[1] * (sc[1] - 32) + sums[2] * (sc[2] - 32) + sums[3] * (sc[3] - 32));

    }

    sum[ith] = sumf;

    //
    // Accumulate the sum from all threads in the threadgroup
    //
    threadgroup_barrier(mem_flags::mem_threadgroup);
    if (ith%4 == 0) {
        for (int i = 1; i < 4; ++i) sum[ith] += sum[ith + i];
    }
    threadgroup_barrier(mem_flags::mem_threadgroup);
    if (ith%16 == 0) {
        for (int i = 4; i < 16; i += 4) sum[ith] += sum[ith + i];
    }
    threadgroup_barrier(mem_flags::mem_threadgroup);
    if (ith == 0) {
        for (int i = 16; i < nth; i += 16) sum[0] += sum[i];
        dst[r1*ne0 + r0] = sum[0];
    }
    const int nth = tptg.x*tptg.y;
    const int ith = tptg.y*tpitg.x + tpitg.y;
    const int nth = tptg.x*tptg.y;
    const int ith = tptg.y*tpitg.x + tpitg.y;