            acc[0] += yl[j] * (xl[j] & 0xF) + yl[j+16] * (xl[j] >> 4);
            acc[1] += yl[j] + yl[j+16];
        sumf += d * (acc[0] - 8.f*acc[1]);
        sum[ith] += sum[ith+1] + sum[ith+2] + sum[ith+3];
        sum[ith] += sum[ith+4] + sum[ith+8] + sum[ith+12];
        for (uint i = 16; i < nth; i += 16) sum[0] += sum[i];
        sum[ith] += sum[ith+1] + sum[ith+2] + sum[ith+3];
        sum[ith] += sum[ith+4] + sum[ith+8] + sum[ith+12];
    const int y_offset = 64*il + n*ir;
    const int q_offset = 32*ip + n*ir;

        device const uint8_t * q = x[i].qs + q_offset;
        uint8_t m1 = scales[0] >>  4;
        device const float   * y = yy + i*QK_K + y_offset;
        //float4 s = {0.f, 0.f, 0.f, 0.f};
        float2 s = {0.f, 0.f};
        float smin = 0;
            s[0] += y[l+ 0] * ((q[l] >> shift1) & 3);
            s[1] += y[l+32] * ((q[l] >> shift2) & 3);
            smin += y[l+ 0] * m1 + y[l+32] * m2;
        const float dall = (float)x[i].d;
        const float dmin = (float)x[i].dmin;

        sumf += dall * (s[0] * d1 + s[1] * d2) - dmin * smin;
    //int mask1 = (ith%4 == 0);
    //int mask2 = (ith%16 == 0);

    //threadgroup_barrier(mem_flags::mem_threadgroup);
    //for (int i = 1; i < 4; ++i) sum[ith] += mask1 * sum[ith + i];
    //threadgroup_barrier(mem_flags::mem_threadgroup);
    //for (int i = 4; i < 16; i += 4) sum[ith] += mask2 * sum[ith + i];
    //threadgroup_barrier(mem_flags::mem_threadgroup);
    //if (ith == 0) {
    //    for (int i = 16; i < nth; i += 16) sum[0] += sum[i];
    //    dst[r1*ne0 + r0] = sum[0];
    //}

    // Note: we absolutely assume that tptg.y = 16 and QK_K = 256!
    const int iqs  = 16 * tpitg.y;
    const int l0   = n*il;
    const int is   = 8*ip + l0/16;

    const int y_offset = 128*ip + l0;
    const int q_offset_l = 64*ip + l0;
    const int q_offset_h = 32*ip + l0;
        device const uint8_t * ql = x[i].ql + q_offset_l;
        device const uint8_t * qh = x[i].qh + q_offset_h;
        device const float * y = yy + i * QK_K + y_offset;