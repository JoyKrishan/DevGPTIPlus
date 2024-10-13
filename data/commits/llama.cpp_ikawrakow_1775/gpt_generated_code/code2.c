static inline uchar4 get_scale_min_k4(int j, device const uint8_t * q) {
    uchar4 r;

    uchar4 case1;
    case1[0] = q[j+0] & 63; case1[1] = q[j+4] & 63;
    case1[2] = q[j+1] & 63; case1[3] = q[j+5] & 63;

    uchar4 case2;
    case2[0] = (q[j+4] & 0xF) | ((q[j-4] >> 6) << 4);
    case2[1] = (q[j+4] >>  4) | ((q[j-0] >> 6) << 4);
    case2[2] = (q[j+5] & 0xF) | ((q[j-3] >> 6) << 4);
    case2[3] = (q[j+5] >>  4) | ((q[j+1] >> 6) << 4);

    int condition = j < 4;

    r[0] = condition ? case1[0] : case2[0];
    r[1] = condition ? case1[1] : case2[1];
    r[2] = condition ? case1[2] : case2[2];
    r[3] = condition ? case1[3] : case2[3];

    return r;
}