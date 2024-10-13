            if (tensor.name == "output.weight") {
                new_type = GGML_TYPE_Q6_K;
            }
            else if (tensor.name.find("attention.wv.weight") != std::string::npos) {