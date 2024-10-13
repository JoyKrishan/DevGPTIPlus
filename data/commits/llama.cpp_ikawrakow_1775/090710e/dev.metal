    const int8_t m8 = 8;

    const int first = 4 * tpitg.y;

    float sumf = 0;
    //float sumf1 = 0;
    //float sumf2 = 0;

        device const uchar * x0p = (device const uchar *) (x + i)->qs;
        device const float * y0p = (device const float *) (y + i*QK4_0);
        device const uchar * x0v = x0p + first;
        device const float * y0v = y0p + first;
        device const float * y1v = y0p + first + 16;
        //float3 acc = {0.0f, 0.0f, 0.f};
        float2 acc = {0.0f, 0.0f};
            //acc[0] += y0v[j] * (x0v[j] & 0xF);
            //acc[1] += y1v[j] * (x0v[j] >>  4);
            //acc[2] += y0v[j] + y1v[j];

            acc[0] += y0v[j] * ((int8_t)(x0v[j] & 0xF) - m8);
            acc[1] += y1v[j] * ((int8_t)(x0v[j] >>  4) - m8);
            //const int x0 = x0v[j] & 0x0F;
            //const int x1 = x0v[j] >>   4;

            //const float y0 = y0v[j];
            //const float y1 = y1v[j];

            //acc += (x0 - 8)*y0 + (x1 - 8)*y1;
        //sum[ith] += acc*d;
        sumf += d * (acc[0] + acc[1]);
        //sumf1 += d * (acc[0] + acc[1]);
        //sumf2 += d * acc[2];
    sum[ith] = sumf;
    //sum[ith] = sumf1 - 8.f*sumf2;
