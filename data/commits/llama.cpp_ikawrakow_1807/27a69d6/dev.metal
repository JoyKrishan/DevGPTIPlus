    //uint32_t aux[4];
    uint16_t aux[8];
    thread const int8_t * scales = (thread const int8_t*)aux;
        const float d_all = (float)(x[i].d);
        device const uint8_t * h = x[i].hmask;
        //device const uint32_t * a = (device const uint32_t *)x[i].scales;
        //aux[0] = (a[0] & kmask2) | (((a[2] >> 0) & kmask1) << 4);
        //aux[1] = (a[1] & kmask2) | (((a[2] >> 2) & kmask1) << 4);
        //aux[2] = ((a[0] >> 4) & kmask2) | (((a[2] >> 4) & kmask1) << 4);
        //aux[3] = ((a[1] >> 4) & kmask2) | (((a[2] >> 6) & kmask1) << 4);

        device const uint16_t * a = (device const uint16_t *)x[i].scales;
        aux[0] = (a[0] & kmask2) | (((a[4] >> 0) & kmask1) << 4);
        aux[1] = (a[1] & kmask2) | (((a[5] >> 0) & kmask1) << 4);
        aux[2] = (a[2] & kmask2) | (((a[4] >> 2) & kmask1) << 4);
        aux[3] = (a[3] & kmask2) | (((a[5] >> 2) & kmask1) << 4);
        aux[4] = ((a[0] >> 4) & kmask2) | (((a[4] >> 4) & kmask1) << 4);
        aux[5] = ((a[1] >> 4) & kmask2) | (((a[5] >> 4) & kmask1) << 4);
        aux[6] = ((a[2] >> 4) & kmask2) | (((a[4] >> 6) & kmask1) << 4);
        aux[7] = ((a[3] >> 4) & kmask2) | (((a[5] >> 6) & kmask1) << 4);
                    *y++ = dl * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
                    *y++ = dl * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));
    //const uint32_t kmask1 = 0x03030303;
    //const uint32_t kmask2 = 0x0f0f0f0f;
    const uint16_t kmask1 = 0x0303;
    const uint16_t kmask2 = 0x0f0f;
    const int tid = tpitg.y;        // expecting 16
    const int ip  = tid/8;          // 0 or 1
    const int il  = tid/2 - 4*ip;   // 0...3
    const int ir  = tid%2;
    const int n   = 8;
    const int l0  = n*ir;

    uint16_t aux[8];
    thread const int8_t * scales = (thread const int8_t*)aux;
        const float d_all = (float)(x[i].d);
        device const uint8_t * q = x[i].qs + 32*ip + l0;
        device const float   * y = yy + i * QK_K + 128*ip + 32*il + l0;
        //device const uint32_t * a = (device const uint32_t *)x[i].scales;
        //aux[0] = (a[0] & kmask2) | (((a[2] >> 0) & kmask1) << 4);
        //aux[1] = (a[1] & kmask2) | (((a[2] >> 2) & kmask1) << 4);
        //aux[2] = ((a[0] >> 4) & kmask2) | (((a[2] >> 4) & kmask1) << 4);
        //aux[3] = ((a[1] >> 4) & kmask2) | (((a[2] >> 6) & kmask1) << 4);
        device const uint16_t * a = (device const uint16_t *)x[i].scales;
        aux[0] = (a[0] & kmask2) | (((a[4] >> 0) & kmask1) << 4);
        aux[1] = (a[1] & kmask2) | (((a[5] >> 0) & kmask1) << 4);
        aux[2] = (a[2] & kmask2) | (((a[4] >> 2) & kmask1) << 4);
        aux[3] = (a[3] & kmask2) | (((a[5] >> 2) & kmask1) << 4);
        aux[4] = ((a[0] >> 4) & kmask2) | (((a[4] >> 4) & kmask1) << 4);
        aux[5] = ((a[1] >> 4) & kmask2) | (((a[5] >> 4) & kmask1) << 4);
        aux[6] = ((a[2] >> 4) & kmask2) | (((a[4] >> 6) & kmask1) << 4);
        aux[7] = ((a[3] >> 4) & kmask2) | (((a[5] >> 6) & kmask1) << 4);

        uint8_t m = 1 << (4*ip + il);
        int is = 8*ip + 2*il;
        float dl;
        //for (int n = 0; n < QK_K; n += 128) {
            int shift = 2*il;
            //for (int j = 0; j < 4; ++j) {
                dl = d_all * (scales[is++] - 32);
                for (int l = 0; l < n; ++l) {
                    sumf += y[l+ 0] * dl * ((int8_t)((q[l+ 0] >> shift) & 3) - ((h[l+ 0] & m) ? 0 : 4));
                }
                dl = d_all * (scales[is++] - 32);
                for (int l = 0; l < n; ++l) {
                    sumf += y[l+16] * dl * ((int8_t)((q[l+16] >> shift) & 3) - ((h[l+16] & m) ? 0 : 4));
                }
                y += 32;
                shift += 2;
                m <<= 1;
            //}
            //q += 32;
        //}
    //threadgroup_barrier(mem_flags::mem_threadgroup);
    //if (ith == 0) {
    //    for (int i = 1; i < nth; ++i) sum[0] += sum[i];
    //    dst[r1*ne0 + r0] = sum[0];
    //}
