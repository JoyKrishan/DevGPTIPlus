    const uint16_t kmask1 = 0x3f3f;
    const uint16_t kmask2 = 0x0f0f;
    const uint16_t kmask3 = 0x0303;

    const int n   = 4;

    const int im = il/2;  // 0 or 1. 0 computes 0,32 + 128,160, 1 computes 64,96 + 192,224
    const int in = il%2;
    //uchar2 sc1, sc2;

        device const uint8_t * q1 = (x + i)->qs + 32*im + n*(2*ir + in);
        device const float   * y1 = yy + i*QK_K + 64*im + n*(2*ir + in);
        device const uint8_t * q2 = q1 + 64;
        device const float   * y2 = y1 + 128;

        device const uint16_t * a = (device const uint16_t *)(x + i)->scales;
        const uchar2 sc1 = as_type<uchar2>((uint16_t)(a[im+0] & kmask1));
        const uchar2 sc2 = as_type<uchar2>((uint16_t)(a[im+2] & kmask1));
        const uchar2 sc3 = as_type<uchar2>((uint16_t)(((a[im+4] >> 0) & kmask2) | (((a[im+0] >> 6) & kmask3) << 4)));
        const uchar2 sc4 = as_type<uchar2>((uint16_t)(((a[im+4] >> 4) & kmask2) | (((a[im+2] >> 6) & kmask3) << 4)));
        float4 s1 = {0.f, 0.f, 0.f, 0.f};
        float4 s2 = {0.f, 0.f, 0.f, 0.f};
            s1[0] += y1[l+ 0] * (q1[l] & 0xF); s1[1] += y1[l+ 0];
            s1[2] += y1[l+32] * (q1[l] >>  4); s1[3] += y1[l+32];
            s2[0] += y2[l+ 0] * (q2[l] & 0xF); s2[1] += y2[l+ 0];
            s2[2] += y2[l+32] * (q2[l] >>  4); s2[3] += y2[l+32];
        sumf += dall * (s1[0] * sc1[0] + s1[2] * sc1[1]
                     +  s2[0] * sc3[0] + s2[2] * sc3[1])
              - dmin * (s1[1] * sc2[0] + s1[3] * sc2[1]
                     +  s2[1] * sc4[0] + s2[3] * sc4[1]);