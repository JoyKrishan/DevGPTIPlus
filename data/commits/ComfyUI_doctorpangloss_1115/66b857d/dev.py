
from comfy.digest import digest
from comfy.vendor.appdirs import user_data_dir




    address: str
    port: int
        self.app = web.Application(client_max_size=20971520, handler_args={'max_field_size': 16380},
                                   middlewares=middlewares)
                await self.send("status", {"status": self.get_queue_info(), 'sid': sid}, sid)
                    await self.send("executing", {"node": self.last_node_id}, sid)
            return web.json_response(
                list(map(lambda f: "/" + os.path.relpath(f, self.web_root).replace("\\", "/"), files)))
                return web.json_response({"name": filename, "subfolder": subfolder, "type": image_upload_type})
                filename, output_dir = folder_paths.annotated_filepath(filename)
            out = comfy.utils.safetensors_header(safetensors_path, max_size=1024 * 1024)
            info['output_is_list'] = obj_class.OUTPUT_IS_LIST if hasattr(obj_class, 'OUTPUT_IS_LIST') else [
                                                                                                               False] * len(
                obj_class.RETURN_TYPES)
            info['display_name'] = nodes.NODE_DISPLAY_NAME_MAPPINGS[
                node_class] if node_class in nodes.NODE_DISPLAY_NAME_MAPPINGS.keys() else node_class
            json_data = await request.json()
                    self.prompt_queue.put(
                        execution.QueueItem(queue_tuple=(number, prompt_id, prompt, extra_data, outputs_to_execute),
                                            completed=None))
            json_data = await request.json()
            json_data = await request.json()
        @routes.get("/api/v1/images/{content_digest}")
        async def get_image(request: web.Request) -> web.FileResponse:
            digest_ = request.match_info['content_digest']
            path = os.path.join(user_data_dir("comfyui", "comfyanonymous", roaming=False), digest_)
            return web.FileResponse(path,
                                    headers={"Content-Disposition": f"filename=\"{digest_}.png\""})

                return web.Response(status=429,
                                    reason=f"the queue has {queue_size} elements and {queue_too_busy_size} is the limit for this worker")
            valid = execution.validate_prompt(prompt_dict)
            if not valid[0]:
                return web.Response(status=400, body=valid[1])

            content_digest = digest(prompt_dict)
            cache_path = os.path.join(user_data_dir("comfyui", "comfyanonymous", roaming=False), content_digest)
            if os.path.exists(cache_path):
                return web.FileResponse(path=cache_path,
                                        headers={"Content-Disposition": f"filename=\"{content_digest}.png\""})
            self.prompt_queue.put(
                execution.QueueItem(queue_tuple=(number, str(uuid.uuid4()), prompt_dict, {}, valid[2]),
                                    completed=completed))
                images: List[dict] = []
                if 'images' in node:
                    images = node['images']
                elif isinstance(node, dict) and 'ui' in node and isinstance(node['ui'], dict) and 'images' in node[
                    'ui']:
                    images = node['ui']['images']
                for image_tuple in images:
                    subfolder_ = image_tuple['subfolder']
                    filename_ = image_tuple['filename']
                    output_images.append(PromptServer.get_output_path(subfolder=subfolder_, filename=filename_))
                if not os.path.exists(os.path.dirname(cache_path)):
                    os.makedirs(os.path.dirname(cache_path))
                os.symlink(image_, cache_path)
                cache_url = "/api/v1/images/{content_digest}"
                filename = os.path.basename(image_)
                if 'Accept' in request.headers and request.headers['Accept'] == 'text/uri-list':
                    res = web.Response(status=200, text=f"""
                    {cache_url}
                    http://{self.address}:{self.port}/view?filename={filename}&type=output
                    """)
                else:
                    res = web.FileResponse(path=image_,
                                           headers={
                                               "Digest": f"SHA-256={content_digest}",
                                               "Location": f"/api/v1/images/{content_digest}",
                                               "Content-Disposition": f"filename=\"{filename}\""})
                return res

            last_history_item: execution.HistoryEntry = history_items[
                max(range(len(history_items)), key=_history_item_timestamp)]
        self.send_sync("status", {"status": self.get_queue_info()})