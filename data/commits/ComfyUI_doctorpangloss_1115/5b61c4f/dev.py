
        for k, v in d.items():
def get_output_data(obj, input_data_all):

            server.send_sync("executing", {"node": unique_id, "prompt_id": prompt_id}, server.client_id)
                server.send_sync("executed", {"node": unique_id, "output": output_ui, "prompt_id": prompt_id},
                             server.client_id)
                    # is_changed = class_def.IS_CHANGED(**input_data_all)
            self.server.send_sync("execution_start", {"prompt_id": prompt_id}, self.server.client_id)
                success, error, ex = recursive_execute(self.server, prompt, self.outputs, output_node_id, extra_data, executed, prompt_id,
                                      self.outputs_ui, self.object_storage)
                # ret = obj_class.VALIDATE_INPUTS(**input_data_all)