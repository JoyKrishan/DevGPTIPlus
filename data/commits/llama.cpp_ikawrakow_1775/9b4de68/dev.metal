    const int ix = tpitg.y/4;           // 0 or 1
    const int iy = tpitg.y - 4*ix;      // 0...3
    const int first = 4 * iy;
    for (int i = 2*tpitg.x + ix; i < nb; i += 2*tptg.x) {
        const float d = (float)x[i].d;
        device const uint8_t * xl = x[i].qs + first;
        device const float   * yl = y + i * QK4_0 + first;
            acc[0] += yl[j+ 0] * ((int8_t)(xl[j] & 0xF) - m8);
            acc[1] += yl[j+16] * ((int8_t)(xl[j] >>  4) - m8);
