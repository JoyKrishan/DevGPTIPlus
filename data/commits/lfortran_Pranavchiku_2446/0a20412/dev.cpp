            // check if type of each arg is same as type of each arg in subrout_called
            if (ASR::is_a<ASR::Function_t>(*symbol_get_past_external(x.m_name))) {
                ASR::Function_t* subrout_called = ASR::down_cast<ASR::Function_t>(symbol_get_past_external(x.m_name));
                for (size_t i = 0; i < subrout_called->n_args; i++) {
                    ASR::expr_t* expected_arg = subrout_called->m_args[i];
                    ASR::expr_t* passed_arg = x.m_args[i].m_value;
                    ASR::ttype_t* expected_arg_type = ASRUtils::expr_type(expected_arg);
                    ASR::ttype_t* passed_arg_type = ASRUtils::expr_type(passed_arg);
                    if (ASR::is_a<ASR::ArrayItem_t>(*passed_arg)) {
                        if (!ASRUtils::types_equal(expected_arg_type, passed_arg_type, true)) {
                            throw CodeGenError("Type mismatch in subroutine call, expected `" + ASRUtils::type_to_str_python(expected_arg_type)
                                    + "`, passed `" + ASRUtils::type_to_str_python(passed_arg_type) + "`", x.m_args[i].m_value->base.loc);
                        }
                    }
                }
            }