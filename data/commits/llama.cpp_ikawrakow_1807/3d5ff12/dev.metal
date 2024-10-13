    const uint8_t m = 1 << (4*ip + il);

    const int shift = 2*il;
    const int is = 8*ip + 2*il;

    //const int shift2 = 4*ip;

    const int q_offset = 32*ip + l0;
    const int y_offset = 128*ip + 32*il + l0;

        device const uint8_t * q = x[i].qs + q_offset;
        device const float   * y = yy + i * QK_K + y_offset;
        //dl = d_all * (scales[is+0] - 32);
        //for (int l = 0; l < n; ++l) {
        //    sumf += y[l+ 0] * dl * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
        //}
        //dl = d_all * (scales[is+1] - 32);
        //for (int l = 0; l < n; ++l) {
        //    sumf += y[l+16] * dl * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));

        float s = 0;
        for (int l = 0; l < n; ++l) {
            s += y[l+ 0] * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
        }
        sumf += s * d_all * (scales[is+0] - 32);

        s = 0;
        for (int l = 0; l < n; ++l) {
            s += y[l+16] * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));
        }
        sumf += s * d_all * (scales[is+1] - 32);
