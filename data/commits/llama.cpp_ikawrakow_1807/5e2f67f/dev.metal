    const uint16_t kmask3 = 0xc0c0;
    const int l0 = n*(2*ir + in);
        device const uint8_t * q1 = (x + i)->qs + 32*im + l0;
        device const float   * y1 = yy + i*QK_K + 64*im + l0;
        const uchar2 sc3 = as_type<uchar2>((uint16_t)(((a[im+4] >> 0) & kmask2) | ((a[im+0] & kmask3) >> 2)));
        const uchar2 sc4 = as_type<uchar2>((uint16_t)(((a[im+4] >> 4) & kmask2) | ((a[im+2] & kmask3) >> 2)));
        float2 s = {0.f, 0.f};
            s[0] += y1[l] * sc1[0] * (q1[l] & 0xF) + y1[l+32] * sc1[1] * (q1[l] >> 4)
                  + y2[l] * sc3[0] * (q2[l] & 0xF) + y2[l+32] * sc3[1] * (q2[l] >> 4);
            s[1] += y1[l] * sc2[0] + y1[l+32] * sc2[1] + y2[l] * sc4[0] + y2[l+32] * sc4[1];
        sumf += dall * s[0] - dmin * s[1];