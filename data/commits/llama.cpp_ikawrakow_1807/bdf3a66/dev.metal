    const uint32_t kmask1 = 0x03030303;
    const uint32_t kmask2 = 0x0f0f0f0f;
    uint32_t utmp[2];

    const int iqs = 16*tpitg.y;
    const int n = iqs/128;                // 0 or 1
    const int r = iqs - 128*n;            // 0...120 in steps of 16
    const int l = 4*(r/16);               // 0...28 in steps of 4
    const int is = l/16;
    const uint8_t m = 1 << (4*n);
    const int shift1 = 4*n;
    const int shift2 = shift1 + 2;
        device const float   * y = yy + i * QK_K + 128*n + l;
        device const uint8_t * q = x[i].qs + 32*n + l;
        device const uint8_t * hm = x[i].hmask + l;

        device const uint32_t * aux = (device const uint32_t *)x[i].scales;
        utmp[0] = ((aux[0] >> shift1) & kmask2) | (((aux[2] >> shift1) & kmask1) << 4);
        utmp[1] = ((aux[1] >> shift1) & kmask2) | (((aux[2] >> shift2) & kmask1) << 4);
        const char4 sc1 = as_type<char4>(utmp[0]);
        const char4 sc2 = as_type<char4>(utmp[1]);
        float sum = 0;
        for (int k = 0; k < 4; ++k) {
            sum += y[k+ 0] * (sc1[is+0] - 32) * (((q[k] >> 0) & 3) - (hm[k] & (m << 0) ? 0 : 4))
                 + y[k+32] * (sc1[is+2] - 32) * (((q[k] >> 2) & 3) - (hm[k] & (m << 1) ? 0 : 4))
                 + y[k+64] * (sc2[is+0] - 32) * (((q[k] >> 4) & 3) - (hm[k] & (m << 2) ? 0 : 4))
                 + y[k+96] * (sc2[is+2] - 32) * (((q[k] >> 6) & 3) - (hm[k] & (m << 3) ? 0 : 4));
        sumf += sum * dall;
    }
    //const int step = QK_K / tptg.y;     // we expect this to be 16
    //const int iqs  = step * tpitg.y;    // 0...240 in steps of 16
    //const int ip   = iqs / 128;         // 0 or 1
    //const int il   = (iqs - 128*ip)/16; // 0...7
    //const int n    = 4;
    //const int l0   = n * il;
    //const int is   = l0/16;
    //const uint8_t m = m1 << (4*ip);
    //const uchar4 mask = {m, (uint8_t)(m << 1), (uint8_t)(m << 2), (uint8_t)(m << 3)};

    //const int shift1 = 4*ip;
    //const int shift2 = shift1 + 2;

    //int8_t sc[4];

    //float sumf = 0;
    //for (int i = tpitg.x; i < nb; i += tptg.x) {

    //    device const uint8_t * q  = x[i].qs + 32*ip + l0;
    //    device const uint8_t * hm = x[i].hmask + l0;
    //    device const uint8_t * scales = x[i].scales;

    //    device const float * y = yy + i * QK_K + 128*ip + l0;

    //    const float dall = x[i].d;

    //    sc[0] = ((scales[is+0] >> shift1) & 0xF) | (((scales[is+ 8] >> shift1) & m3) << 4);
    //    sc[1] = ((scales[is+2] >> shift1) & 0xF) | (((scales[is+10] >> shift1) & m3) << 4);
    //    sc[2] = ((scales[is+4] >> shift1) & 0xF) | (((scales[is+ 8] >> shift2) & m3) << 4);
    //    sc[3] = ((scales[is+6] >> shift1) & 0xF) | (((scales[is+10] >> shift2) & m3) << 4);

    //    //if (ip == 0) {
    //    //    sc[0] = (scales[is+0] & 0xF) | (((scales[is+ 8] >> 0) & m3) << 4);
    //    //    sc[1] = (scales[is+2] & 0xF) | (((scales[is+10] >> 0) & m3) << 4);
    //    //    sc[2] = (scales[is+4] & 0xF) | (((scales[is+ 8] >> 2) & m3) << 4);
    //    //    sc[3] = (scales[is+6] & 0xF) | (((scales[is+10] >> 2) & m3) << 4);
    //    //} else {
    //    //    sc[0] = (scales[is+0] >>  4) | (((scales[is+ 8] >> 4) & m3) << 4);
    //    //    sc[1] = (scales[is+2] >>  4) | (((scales[is+10] >> 4) & m3) << 4);
    //    //    sc[2] = (scales[is+4] >>  4) | (((scales[is+ 8] >> 6) & m3) << 4);
    //    //    sc[3] = (scales[is+6] >>  4) | (((scales[is+10] >> 6) & m3) << 4);
    //    //}


    //    float4 sums = {0.f, 0.f, 0.f, 0.f};
    //    for (int l = 0; l < n; ++l) {
    //        sums[0] += y[l+ 0] * ((int8_t)((q[l] >> 0) & m3) - ((hm[l] & mask[0]) ? 0 : m4));
    //        sums[1] += y[l+32] * ((int8_t)((q[l] >> 2) & m3) - ((hm[l] & mask[1]) ? 0 : m4));
    //        sums[2] += y[l+64] * ((int8_t)((q[l] >> 4) & m3) - ((hm[l] & mask[2]) ? 0 : m4));
    //        sums[3] += y[l+96] * ((int8_t)((q[l] >> 6) & m3) - ((hm[l] & mask[3]) ? 0 : m4));
    //    }
    //    sumf += dall * (sums[0] * (sc[0] - 32)
    //                  + sums[1] * (sc[1] - 32)
    //                  + sums[2] * (sc[2] - 32)
    //                  + sums[3] * (sc[3] - 32));

    //}