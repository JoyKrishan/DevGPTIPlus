    # (mask, pose, control PIL images), (original positon face + padding: x, y, w, h)
    pipe.load_ip_adapter_instantid(face_adapter)
    # processed face with padding
    # integrate cropped result into the pose image