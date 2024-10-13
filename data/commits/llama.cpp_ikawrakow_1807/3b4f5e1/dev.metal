    const uint16_t kmask1 = 0x3f3f;
    const uint16_t kmask2 = 0x0f0f;
    const uint16_t kmask3 = 0xc0c0;

    const int ir  = tid - 4*il;// 0...3
    const int n   = 4;

    const int im = il/2;  // 0 or 1. 0 computes 0,32 + 128,160, 1 computes 64,96 + 192,224
    const int in = il%2;

    const int l0 = n*(2*ir + in);
    const int q_offset = 32*im + l0;
    const int y_offset = 64*im + l0;
    const uint8_t hm1 = 1u << (2*im);
    const uint8_t hm3 = hm1 << 4;
    const uint8_t hm4 = hm2 << 4;

    uchar2 sc1, sc2, sc3, sc4;
        device const uint8_t * q1 = (x + i)->qs + q_offset;
        device const uint8_t * q2 = q1 + 64;
        device const uint8_t * qh = (x + i)->qh + l0;
        device const float   * y1 = yy + i*QK_K + y_offset;
        device const float   * y2 = y1 + 128;
        device const uint16_t * a = (device const uint16_t *)(x + i)->scales;
        sc1 = as_type<uchar2>((uint16_t)(a[im+0] & kmask1));
        sc2 = as_type<uchar2>((uint16_t)(a[im+2] & kmask1));
        sc3 = as_type<uchar2>((uint16_t)(((a[im+4] >> 0) & kmask2) | ((a[im+0] & kmask3) >> 2)));
        sc4 = as_type<uchar2>((uint16_t)(((a[im+4] >> 4) & kmask2) | ((a[im+2] & kmask3) >> 2)));
        float smin = 0;

            s[0] += y1[l+ 0] * ((q1[l] & 0xF) + (qh[l] & hm1 ? 16 : 0));
            s[1] += y1[l+32] * ((q1[l] >>  4) + (qh[l] & hm2 ? 16 : 0));
            s[2] += y2[l+ 0] * ((q2[l] & 0xF) + (qh[l] & hm3 ? 16 : 0));
            s[3] += y2[l+32] * ((q2[l] >>  4) + (qh[l] & hm4 ? 16 : 0));
            smin += y1[l] * sc2[0] + y1[l+32] * sc2[1] + y2[l] * sc4[0] + y2[l+32] * sc4[1];

        sumf += dall * (s[0] * sc1[0] + s[1] * sc1[1] + s[2] * sc3[0] + s[3] * sc3[1]) - dmin * smin;
        sum[ith] += sum[ith+1] + sum[ith+2] + sum[ith+3];
        sum[ith] += sum[ith+4] + sum[ith+8] + sum[ith+12];