    //const int ir  = tid%4;     // 0...3
    const int ir  = tid - 4*il;// 0...3

    const int q_offset = 32*im + l0;
    const int y_offset = 64*im + l0;
    //uint16_t aux_scales[4];
    //thread uint8_t * sc = (thread uint8_t *)aux_scales;

    //uint32_t aux32[4];
    //thread const uint8_t * sc = (thread const uint8_t *)aux32;

    uchar2 sc1, sc2, sc3, sc4;

        device const uint8_t * q1 = (x + i)->qs + q_offset;
        device const float   * y1 = yy + i*QK_K + y_offset;
        //device const uint32_t * a = (device const uint32_t *)(x + i)->scales;
        //aux32[0] = a[0] & 0x3f3f3f3f;  // scales for 0, 32, 64, 96
        //aux32[1] = a[1] & 0x3f3f3f3f;  // mins   for 0, 32, 64, 96
        //aux32[2] = ((a[2] >> 0) & 0x0f0f0f0f) | ((a[0] & 0xc0c0c0c0) >> 2); // scales for 128, 160, 192, 224
        //aux32[3] = ((a[2] >> 4) & 0x0f0f0f0f) | ((a[1] & 0xc0c0c0c0) >> 2); // mins   for 128, 160, 192, 224

        //aux_scales[0] = (uint16_t)(a[im+0] & kmask1);
        //aux_scales[1] = (uint16_t)(((a[im+4] >> 0) & kmask2) | ((a[im+0] & kmask3) >> 2));
        //aux_scales[2] = (uint16_t)(a[im+2] & kmask1);
        //aux_scales[3] = (uint16_t)(((a[im+4] >> 4) & kmask2) | ((a[im+2] & kmask3) >> 2));

        device const uint16_t * a = (device const uint16_t *)(x + i)->scales;
        sc1 = as_type<uchar2>((uint16_t)(a[im+0] & kmask1));
        sc2 = as_type<uchar2>((uint16_t)(a[im+2] & kmask1));
        sc3 = as_type<uchar2>((uint16_t)(((a[im+4] >> 0) & kmask2) | ((a[im+0] & kmask3) >> 2)));
        sc4 = as_type<uchar2>((uint16_t)(((a[im+4] >> 4) & kmask2) | ((a[im+2] & kmask3) >> 2)));
        //float2 s = {0.f, 0.f};
        float4 s = {0.f, 0.f, 0.f, 0.f};
        float smin = 0;

            ////s[0] += y1[l] * sc[0] * (q1[l] & 0xF) + y1[l+32] * sc[1] * (q1[l] >> 4)
            ////      + y2[l] * sc[2] * (q2[l] & 0xF) + y2[l+32] * sc[3] * (q2[l] >> 4);
            ////s[1] += y1[l] * sc[4] + y1[l+32] * sc[5] + y2[l] * sc[6] + y2[l+32] * sc[7];

            ////s[0] += y1[l] * sc[2*im+0] * (q1[l] & 0xF) + y1[l+32] * sc[2*im+1] * (q1[l] >> 4)
            ////      + y2[l] * sc[2*im+8] * (q2[l] & 0xF) + y2[l+32] * sc[2*im+9] * (q2[l] >> 4);
            ////s[1] += y1[l] * sc[2*im+4] + y1[l+32] * sc[2*im+5] + y2[l] * sc[2*im+12] + y2[l+32] * sc[2*im+13];

            //s[0] += y1[l] * sc1[0] * (q1[l] & 0xF) + y1[l+32] * sc1[1] * (q1[l] >> 4)
            //      + y2[l] * sc3[0] * (q2[l] & 0xF) + y2[l+32] * sc3[1] * (q2[l] >> 4);
            //s[1] += y1[l] * sc2[0] + y1[l+32] * sc2[1] + y2[l] * sc4[0] + y2[l+32] * sc4[1];

            s[0] += y1[l] * (q1[l] & 0xF); s[1] += y1[l+32] * (q1[l] >> 4);
            s[2] += y2[l] * (q2[l] & 0xF); s[3] += y2[l+32] * (q2[l] >> 4);
            smin += y1[l] * sc2[0] + y1[l+32] * sc2[1] + y2[l] * sc4[0] + y2[l+32] * sc4[1];

        //sumf += dall * s[0] - dmin * s[1];
        sumf += dall * (s[0] * sc1[0] + s[1] * sc1[1] + s[2] * sc3[0] + s[3] * sc3[1]) - dmin * smin;
