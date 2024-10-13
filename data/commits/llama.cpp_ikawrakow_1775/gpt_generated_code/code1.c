static inline uchar4 get_scale_min_k4(int j, device const uint8_t * q) {
    uchar4 r;
    if (j < 4) {
        r[0] = q[j+0] & 63; r[1] = q[j+4] & 63;
        r[2] = q[j+1] & 63; r[3] = q[j+5] & 63;
    } else {
        r[0] = (q[j+4] & 0xF) | ((q[j-4] >> 6) << 4);
        r[1] = (q[j+4] >>  4) | ((q[j-0] >> 6) << 4);
        r[2] = (q[j+5] & 0xF) | ((q[j-3] >> 6) << 4);
        r[3] = (q[j+5] >>  4) | ((q[j+1] >> 6) << 4);
    }
    return r;
}