                                Vec<ASR::dimension_t> dims;
                                dims.reserve(al, 1);
                                ASR::dimension_t dim;
                                dim.loc = x.base.base.loc;
                                dim.m_length = nullptr;
                                dim.m_start = nullptr;
                                dims.push_back(al, dim);
                                ASR::asr_t* descriptor_array = ASR::make_Array_t(al, x.base.base.loc, ASRUtils::type_get_past_array(expected_arg_type),
                                                                dims.p, dims.size(), ASR::array_physical_typeType::DescriptorArray);
                                ASR::asr_t* expected_array = ASR::make_Array_t(al, x.base.base.loc, ASRUtils::type_get_past_array(expected_arg_type),
                                                                dims.p, dims.size(), ASRUtils::extract_physical_type(expected_arg_type));

                                ASR::expr_t* array_section = ASRUtils::EXPR(ASR::make_ArraySection_t(al, array_item->base.base.loc,
                                                            array_expr, array_indices.p, array_indices.size(),
                                                            ASRUtils::TYPE(descriptor_array), nullptr));
                                                        ASRUtils::extract_physical_type(ASRUtils::TYPE(descriptor_array)), ASRUtils::extract_physical_type(expected_arg_type), ASRUtils::TYPE(expected_array), nullptr);