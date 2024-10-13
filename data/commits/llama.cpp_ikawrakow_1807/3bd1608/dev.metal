        int shift1 = 0;


                const int shift2 = 2*(j/2);

            shift1 += 4;
    const uint32_t kmask1 = 0x03030303;
    const uint32_t kmask2 = 0x0f0f0f0f;

    uint32_t aux[2];

    const int step = QK_K / tptg.y;     // we expect this to be 16
    const int iqs  = step * tpitg.y;    // 0...240 in steps of 16
    const int ip   = iqs / 128;         // 0 or 1
    const int il   = (iqs - 128*ip)/16; // 0...7
    const int n    = 4;
    const int l0   = n * il;
    const int is   = l0/16;
    const uint8_t m = m1 << (4*ip);
    const uchar4 mask = {m, (uint8_t)(m << 1), (uint8_t)(m << 2), (uint8_t)(m << 3)};
    const int shift1 = 4*ip;
    //int8_t sc[4];

        device const uint32_t * a = (device const uint32_t *)x[i].scales;
        uint32_t tmp = a[2];
        aux[0] = ((a[0] >> shift1) & kmask2) | (((tmp >> shift1) & kmask1) << 4);
        aux[1] = ((a[1] >> shift1) & kmask2) | (((tmp >> shift2) & kmask1) << 4);
        device const uint8_t * q  = x[i].qs + 32*ip + l0;
        device const uint8_t * hm = x[i].hmask + l0;
        //device const uint8_t * scales = x[i].scales;
        device const float * y = yy + i * QK_K + 128*ip + l0;
        const char4 sc1 = as_type<char4>(aux[0]);
        const char4 sc2 = as_type<char4>(aux[1]);
        //sc[0] = ((scales[is+0] >> shift1) & 0xF) | (((scales[is+ 8] >> shift1) & m3) << 4);
        //sc[1] = ((scales[is+2] >> shift1) & 0xF) | (((scales[is+10] >> shift1) & m3) << 4);
        //sc[2] = ((scales[is+4] >> shift1) & 0xF) | (((scales[is+ 8] >> shift2) & m3) << 4);
        //sc[3] = ((scales[is+6] >> shift1) & 0xF) | (((scales[is+10] >> shift2) & m3) << 4);
        float4 sums = {0.f, 0.f, 0.f, 0.f};
        for (int l = 0; l < n; ++l) {
            sums[0] += y[l+ 0] * ((int8_t)((q[l] >> 0) & m3) - ((hm[l] & mask[0]) ? 0 : m4));
            sums[1] += y[l+32] * ((int8_t)((q[l] >> 2) & m3) - ((hm[l] & mask[1]) ? 0 : m4));
            sums[2] += y[l+64] * ((int8_t)((q[l] >> 4) & m3) - ((hm[l] & mask[2]) ? 0 : m4));
            sums[3] += y[l+96] * ((int8_t)((q[l] >> 6) & m3) - ((hm[l] & mask[3]) ? 0 : m4));
        }
        //sumf += dall * (sums[0] * (sc[0] - 32)
        //              + sums[1] * (sc[1] - 32)
        //              + sums[2] * (sc[2] - 32)
        //              + sums[3] * (sc[3] - 32));
        sumf += dall * (sums[0] * (sc1[is+0] - 32)
                      + sums[1] * (sc1[is+2] - 32)
                      + sums[2] * (sc2[is+0] - 32)
                      + sums[3] * (sc2[is+2] - 32));
    }