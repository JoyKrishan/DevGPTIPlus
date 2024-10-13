            perm_params = get_permuted_param(ps, perm, k, model_a)
        except RuntimeError:  # dealing with pix2pix and inpainting models