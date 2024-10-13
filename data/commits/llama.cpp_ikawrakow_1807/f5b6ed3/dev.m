    GGML_METAL_DECL_KERNEL(get_rows_q3_k);
    GGML_METAL_DECL_KERNEL(mul_mat_q3_k_f32);
        GGML_METAL_ADD_KERNEL(get_rows_q3_k);
        GGML_METAL_ADD_KERNEL(mul_mat_q3_k_f32);
                            case GGML_TYPE_Q3_K:
                                {
                                    GGML_ASSERT(ne02 == 1);
                                    GGML_ASSERT(ne12 == 1);

                                    nth0 = 4;
                                    nth1 = 16;
                                    [encoder setComputePipelineState:ctx->pipeline_mul_mat_q3_k_f32];
                                } break;
                        } else if (src0t == GGML_TYPE_Q2_K ||
                                   src0t == GGML_TYPE_Q3_K ||
                                   src0t == GGML_TYPE_Q4_K ||
                                   src0t == GGML_TYPE_Q6_K) {
                        case GGML_TYPE_Q3_K: [encoder setComputePipelineState:ctx->pipeline_get_rows_q3_k]; break;