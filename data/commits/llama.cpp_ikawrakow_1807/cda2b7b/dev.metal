typedef struct {
    half d;                      // super-block scale for quantized scales
    half dmin;                   // super-block scale for quantized mins
    uint8_t scales[3*QK_K/64];   // scales and mins, quantized with 6 bits
    uint8_t qh[QK_K/8];          // quants, high bit
    uint8_t qs[QK_K/2];          // quants, low 4 bits
} block_q5_k;


static void dequantize_row_q5_k(device const block_q5_k * x, device float * y, int k) {
    assert(k % QK_K == 0);
    const int nb = k / QK_K;

   for (int i = 0; i < nb; i++) {

        const float d = (float)(x[i].d);
        const float min = (float)(x[i].dmin);

        device const uint8_t * ql = x[i].qs;
        device const uint8_t * qh = x[i].qh;

        int is = 0;
        uint8_t u1 = 1, u2 = 2;
        for (int j = 0; j < QK_K; j += 64) {
            const uchar4 sc = get_scale_min_k4(is, x[i].scales);
            const float d1 = d * sc[0]; const float m1 = min * sc[1];
            const float d2 = d * sc[2]; const float m2 = min * sc[3];
            for (int l = 0; l < 32; ++l) *y++ = d1 * ((ql[l] & 0xF) + (qh[l] & u1 ? 16 : 0)) - m1;
            for (int l = 0; l < 32; ++l) *y++ = d2 * ((ql[l]  >> 4) + (qh[l] & u2 ? 16 : 0)) - m2;
            ql += 32; is += 2;
            u1 <<= 2; u2 <<= 2;
        }
    }

}

kernel void kernel_get_rows_q5_k(
        device const  void * src0,
        device const   int * src1,
        device       float * dst,
        constant   int64_t & ne00,
        constant  uint64_t & nb01,
        constant  uint64_t & nb1,
        uint tpig[[thread_position_in_grid]]) {
    const int i = tpig;
    const int r = ((device int32_t *) src1)[i];

    dequantize_row_q5_k(
            (device const block_q5_k *) ((device char *) src0 + r*nb01),
                       (device float *) ((device char *)  dst + i*nb1), ne00);
}

    const uint8_t m1 = 1;
    const uint8_t m3 = 3;
    const int8_t  m4 = 4;

    //const uint32_t kmask1 = 0x03030303;
    //const uint32_t kmask2 = 0x0f0f0f0f;

    const uint8_t m = m1 << (4*ip);
    //uin32_t utmp[2];
    //char4 sc1, sc2;
    //uint32_t aux[3];
        device const uint8_t * scales = x[i].scales;
        //aux[0] = (a[0] & kmask2) | (((tmp >> 0) & kmask1) << 4);
        //aux[1] = (a[1] & kmask2) | (((tmp >> 2) & kmask1) << 4);
        ////memcpy(aux, x[i].scales, 12);
        //device const uint32_t * aux = (device const uint32_t *)x[i].scales;
        //    sc1 = as_type<char4>((aux[0] & kmask2) | (((aux[2] >> 0) & kmask1) << 4));
        //    sc2 = as_type<char4>((aux[1] & kmask2) | (((aux[2] >> 2) & kmask1) << 4));
        //    //utmp[0] = (aux[0] & kmask2) | (((aux[2] >> 0) & kmask1) << 4);
        //    //utmp[1] = (aux[1] & kmask2) | (((aux[2] >> 2) & kmask1) << 4);
        //    sc1 = as_type<char4>(((aux[0] >> 4) & kmask2) | (((aux[2] >> 4) & kmask1) << 4));
        //    sc2 = as_type<char4>(((aux[1] >> 4) & kmask2) | (((aux[2] >> 6) & kmask1) << 4));
        //    //utmp[0] = ((aux[0] >> 4) & kmask2) | (((aux[2] >> 4) & kmask1) << 4);
        //    //utmp[1] = ((aux[1] >> 4) & kmask2) | (((aux[2] >> 6) & kmask1) << 4);

            sc[0] = (scales[is+0] & 0xF) | (((scales[is+ 8] >> 0) & m3) << 4);
            sc[1] = (scales[is+2] & 0xF) | (((scales[is+10] >> 0) & m3) << 4);
            sc[2] = (scales[is+4] & 0xF) | (((scales[is+ 8] >> 2) & m3) << 4);
            sc[3] = (scales[is+6] & 0xF) | (((scales[is+10] >> 2) & m3) << 4);
            sc[0] = (scales[is+0] >>  4) | (((scales[is+ 8] >> 4) & m3) << 4);
            sc[1] = (scales[is+2] >>  4) | (((scales[is+10] >> 4) & m3) << 4);
            sc[2] = (scales[is+4] >>  4) | (((scales[is+ 8] >> 6) & m3) << 4);
            sc[3] = (scales[is+6] >>  4) | (((scales[is+10] >> 6) & m3) << 4);
        uchar4 mask = {m, (uint8_t)(m << 1), (uint8_t)(m << 2), (uint8_t)(m << 3)};

            sums[0] += y[l+ 0] * ((int8_t)((q[l] >> 0) & m3) - ((hm[l] & mask[0]) ? 0 : m4));
            sums[1] += y[l+32] * ((int8_t)((q[l] >> 2) & m3) - ((hm[l] & mask[1]) ? 0 : m4));
            sums[2] += y[l+64] * ((int8_t)((q[l] >> 4) & m3) - ((hm[l] & mask[2]) ? 0 : m4));
            sums[3] += y[l+96] * ((int8_t)((q[l] >> 6) & m3) - ((hm[l] & mask[3]) ? 0 : m4));
        //sumf += dall * (sums[0] * (sc1[is] - 32) + sums[1] * (sc1[is+2] - 32) + sums[2] * (sc2[is] - 32) + sums[3] * (sc2[is+2] - 32));
kernel void kernel_mul_mat_q5_k_f32(
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

    device const block_q5_k * x = (device const block_q5_k *) src0 + r0*nb;
    device const float     * yy = (device const float      *) src1 + r1*ne10;

    const int nth = tptg.x*tptg.y;
    const int ith = tptg.y*tpitg.x + tpitg.y;

    const int tid = tpitg.y;   // 0...16
    const int il  = tid/4;     // 0...3
    const int ir  = tid%4;     // 0...3
    const int n   = 8;
    const int is  = 2*il;

    const uint8_t hm1 = 1u << is;
    const uint8_t hm2 = hm1 << 1;

    float sumf = 0;
    for (int i = tpitg.x; i < nb; i += tptg.x) {

        device const uint8_t * ql = (x + i)->qs + 32*il + n*ir;
        device const uint8_t * qh = (x + i)->qh + n*ir;
        device const float   * y  = yy + i*QK_K + 64*il + n*ir;
        device const uint8_t * scales = (x + i)->scales;

        const float dall = (float)((x + i)->d);
        const float dmin = (float)((x + i)->dmin);

        const uchar4 sc = get_scale_min_k4(is, scales);

        float4 s = {0.f, 0.f, 0.f, 0.f};
        for (int l = 0; l < n; ++l) {
            s[0] += y[l+ 0] * ((ql[l] & 0xF) + (qh[l] & hm1 ? 16 : 0)); s[1] += y[l+ 0];
            s[2] += y[l+32] * ((ql[l] >>  4) + (qh[l] & hm2 ? 16 : 0)); s[3] += y[l+32];
        }
        sumf += dall * (s[0] * sc[0] + s[2] * sc[2]) - dmin * (s[1] * sc[1] + s[3] * sc[3]);

    }
    sum[ith] = sumf;

    //
    // Accumulate the sum from all threads in the threadgroup
    // This version is slightly faster than the commented out one below,
    // which I copy-pasted from ggerganov's q4_0 dot product for metal.
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

    //// accumulate the sum from all threads in the threadgroup
    //threadgroup_barrier(mem_flags::mem_threadgroup);
    //for (uint i = nth/2; i > 0; i /= 2) {
    //    if (ith < i) {
    //        sum[ith] += sum[ith + i];
    //    }
    //    threadgroup_barrier(mem_flags::mem_threadgroup);
    //}

    //if (ith == 0) {
    //    dst[r1*ne0 + r0] = sum[0];
    //}
}
