        // is = 0 -> shift1 = 0, shift2 = 0, accessing aux[0] -> (a[0] & kmask2) | (((a[4] >> 0) & kmask1) << 4);          ip = 0, il = 0
        // is = 2 -> shift1 = 0, shift2 = 0, accessing aux[1] -> (a[1] & kmask2) | (((a[5] >> 0) & kmask1) << 4);          ip = 0, il = 1
        // is = 4 -> shift1 = 0, shift2 = 2, accessing aux[2] -> (a[2] & kmask2) | (((a[4] >> 2) & kmask1) << 4);          ip = 0, il = 2
        // is = 6 -> shift1 = 0, shift2 = 2, accessing aux[3] -> (a[3] & kmask2) | (((a[5] >> 2) & kmask1) << 4);          ip = 0, il = 3
        // is = 8 -> shift1 = 4, shift2 = 4, accessing aux[4] -> ((a[0] >> 4) & kmask2) | (((a[4] >> 4) & kmask1) << 4);   ip = 1, il = 0
        // is =10 -> shift1 = 4, shift2 = 4, accessing aux[5] -> ((a[1] >> 4) & kmask2) | (((a[5] >> 4) & kmask1) << 4);   ip = 1, il = 1
        // is =12 -> shift1 = 4, shift2 = 6, accessing aux[6] -> ((a[2] >> 4) & kmask2) | (((a[4] >> 6) & kmask1) << 4);   ip = 1, il = 2
        // is =14 -> shift1 = 4, shift2 = 6, accessing aux[7] -> ((a[3] >> 4) & kmask2) | (((a[5] >> 6) & kmask1) << 4);   ip = 1, il = 3

    const int s_shift1 = 4*ip;
    const int s_shift2 = s_shift1 + 2*(il/2);
    const int ik = 4 + (il%2);
        const char2 scales = as_type<char2>((uint16_t)(((a[il] >> s_shift1) & kmask2) | (((a[ik] >> s_shift2) & kmask1) << 4)));
        sumf += s * d_all * (scales[0] - 32);
        sumf += s * d_all * (scales[1] - 32);

        //const float d1 = d_all * (scales[0] - 32);
        //for (int l = 0; l < n; ++l) {
        //    sumf += y[l+ 0] * d1 * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
        //}

        //const float d2 = d_all * (scales[1] - 32);
        //for (int l = 0; l < n; ++l) {
        //    sumf += y[l+16] * d2 * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));
        //}

        //float2 s = {0.f, 0.f};
        //for (int l = 0; l < n; ++l) {
        //    s[0] += y[l+ 0] * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
        //    s[1] += y[l+16] * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));
        //}
        //sumf += d_all * (s[0] * (scales[0] - 32) + s[1] * (scales[1] - 32));