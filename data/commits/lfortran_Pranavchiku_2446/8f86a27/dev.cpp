                if (compiler_options.legacy_array_sections) {
                    // call b(w(icon)) -> call b(w(icon:)) if b is expecting an array
                    ASR::FunctionType_t* f_type = ASR::down_cast<ASR::FunctionType_t>(f->m_function_signature);
                    std::map<int, ASR::ttype_t*> array_arg_idx;
                    for (size_t i = 0; i < f->n_args; i++) {
                        if (ASRUtils::is_array(ASRUtils::expr_type(f->m_args[i]))) {
                            array_arg_idx[i] = f_type->m_arg_types[i];
                        }
                    }
                    Vec<ASR::call_arg_t> args_with_array_section;
                    args_with_array_section.reserve(al, args.size());
                    for (size_t i = 0; i < args.size(); i++) {
                        // check if i is in array_arg_idx
                        if (array_arg_idx.find(i) != array_arg_idx.end()) {
                            ASR::call_arg_t arg = args[i];
                            ASR::ttype_t* expected_arg_type = ASRUtils::duplicate_type(al, array_arg_idx[i]);
                            ASR::expr_t* arg_expr = arg.m_value;
                            if (ASR::is_a<ASR::ArrayItem_t>(*arg_expr)) {
                                ASR::ArrayItem_t* array_item = ASR::down_cast<ASR::ArrayItem_t>(arg_expr);
                                ASR::expr_t* array_expr = array_item->m_v;
                                LCOMPILERS_ASSERT(array_item->n_args > 0);
                                ASR::array_index_t last_arg = array_item->m_args[array_item->n_args - 1];
                                ASR::expr_t* idx = last_arg.m_right;

                                // make ArraySection
                                Vec<ASR::array_index_t> array_indices;
                                array_indices.reserve(al, array_item->n_args);

                                for (size_t i = 0; i < array_item->n_args - 1; i++) {
                                    array_indices.push_back(al, array_item->m_args[i]);
                                }

                                ASR::ttype_t *int32_type = ASRUtils::TYPE(ASR::make_Integer_t(al, x.base.base.loc, 4));
                                ASR::expr_t* one = ASRUtils::EXPR(ASR::make_IntegerConstant_t(al, x.base.base.loc, 1, int32_type));

                                ASR::expr_t* array_bound = ASRUtils::get_bound<SemanticError>(array_expr, array_item->n_args, "ubound", al);

                                ASR::array_index_t array_idx;
                                array_idx.loc = array_item->base.base.loc;
                                array_idx.m_left = idx;
                                array_idx.m_right = array_bound;
                                array_idx.m_step = one;

                                array_indices.push_back(al, array_idx);

                                ASR::expr_t* array_section = ASRUtils::EXPR(ASR::make_ArraySection_t(al, array_item->base.base.loc, array_expr, array_indices.p, array_indices.size(),
                                                            expected_arg_type, nullptr));

                                ASR::asr_t* array_cast = ASRUtils::make_ArrayPhysicalCast_t_util(al, array_item->base.base.loc, array_section, 
                                                        ASR::array_physical_typeType::DescriptorArray, ASR::array_physical_typeType::DescriptorArray, expected_arg_type, nullptr);

                                ASR::expr_t* array_section_cast = ASRUtils::EXPR(array_cast);

                                arg.m_value = array_section_cast;

                                args_with_array_section.push_back(al, arg);
                            } else {
                                args_with_array_section.push_back(al, args[i]);
                            }
                        } else {
                            args_with_array_section.push_back(al, args[i]);
                        }
                    }
                    args = args_with_array_section;
                }