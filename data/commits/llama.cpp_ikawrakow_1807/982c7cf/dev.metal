// 84 bytes / block
// 110 bytes / block
// 144 bytes / block
// 176 bytes / block
// 210 bytes / block
    thread const int8_t * scales = (thread const int8_t *)aux;
        int is = 0;
    const int tid  = tpitg.y;
    const int il   = tid/4;             // 0...3   0 -> 0...63, 1 -> 64...127, 2 -> 128...191, 3 -> 192...255
    const int ip   = il / 2;            // 0 or 1  0 -> use 1st 32 q's (0...127), 1 -> 2nd 32 (128...255)
    const int is   = il % 2;            // 0 or 1  0 -> 0...63, 128...191, 1 -> 64...127, 192...255
    const int ir   = tid - 4*il;        // 0...3
    const int l0   = n * ir;            // first index for this thread within a group of 32 (0, 4, 8, 12)
    // 0...31 use 1<<0, 32...63 use 1<<1, 64...95 use 1<<2, 96...128 use 1<<3, etc.
    // we process 64*il...64*il+63 -> 1st mask is 1<<(2*il), second is 1<<(2*il+1)
    // masks for high bit
    const uint8_t m = 1 << (2*il);
    const uchar2 mask = {m, (uint8_t)(m << 1)};

    const int shift1 = 4*ip;   // 1st shift for scale. must be 0 (0...127) or 4 (128...255)
    const int shift2 = 2*il;   // 2nd shift for scale. 0, 2, 4, or 6
    // 1st shift for quants must be 0 in 0...31, 2 in 32...64, 4 in 64...96, 6 in 96...128, then agsin 0, 2, etc.
    const int shift3 = 4*is;
    const int shift4 = shift3 + 2;

    const int q_offset = 32*ip + l0;
    const int y_offset = 64*il + l0;
        // Copied from the C de-quantization code
        //aux[0] = ((a[0] >> 0) & kmask2) | (((a[2] >> 0) & kmask1) << 4);
        //aux[1] = ((a[1] >> 0) & kmask2) | (((a[2] >> 2) & kmask1) << 4);
        //aux[2] = ((a[0] >> 4) & kmask2) | (((a[2] >> 4) & kmask1) << 4);
        //aux[3] = ((a[1] >> 4) & kmask2) | (((a[2] >> 6) & kmask1) << 4);

        ////  0....63 we need a[0] with shift=0, a[2] with shift 0
        //// 64...127 we need a[1] with shift=0, a[2] with shift 2
        ////128...191 we need a[0] with shift=4, a[2] with shift 4
        ////192...255 we need a[1] with shift=4, a[2] with shift 6
        //// a[is] >> (4*ip) & 0xF | a[2] >> (2*il) & 3
        const char4 sc = as_type<char4>(((a[is] >> shift1) & kmask2) | (((a[2] >> shift2) & kmask1) << 4));
        // Here I was thinking "what if the above is not processed correctly because x[i].scales is not 4-byte
        // aligned?". If that was the issue, using a uint16_t pointer should solve it as x[i].scales is 2-byte aligned.
        // It does not solve the problem, it just makes it run slower.
        //device const uint16_t * a = (device const uint16_t *)x[i].scales;
        //const char2 sc1 = as_type<char2>((uint16_t)(((a[2*is+0] >> shift1) & kmask2) | (((a[4] >> shift2) & kmask1) << 4)));
        //const char2 sc2 = as_type<char2>((uint16_t)(((a[2*is+1] >> shift1) & kmask2) | (((a[5] >> shift2) & kmask1) << 4)));
        device const uint8_t * q  = x[i].qs + q_offset;
        device const uint8_t * h = x[i].hmask + l0;
        device const float * y = yy + i * QK_K + y_offset;
        const float dall = (float)x[i].d;
            sums[0] += y[l+ 0] * ((int8_t)((q[l+ 0] >> shift3) & m3) - ((h[l+ 0] & mask[0]) ? 0 : m4));
            sums[1] += y[l+16] * ((int8_t)((q[l+16] >> shift3) & m3) - ((h[l+16] & mask[0]) ? 0 : m4));
            sums[2] += y[l+32] * ((int8_t)((q[l+ 0] >> shift4) & m3) - ((h[l+ 0] & mask[1]) ? 0 : m4));
            sums[3] += y[l+48] * ((int8_t)((q[l+16] >> shift4) & m3) - ((h[l+16] & mask[1]) ? 0 : m4));
        sumf += dall * (sums[0] * (sc[0] - 32)
                      + sums[1] * (sc[1] - 32)
                      + sums[2] * (sc[2] - 32)
                      + sums[3] * (sc[3] - 32));
        //sumf += dall * (sums[0] * (sc1[0] - 32)
        //              + sums[1] * (sc1[1] - 32)
        //              + sums[2] * (sc2[0] - 32)
        //              + sums[3] * (sc2[1] - 32));