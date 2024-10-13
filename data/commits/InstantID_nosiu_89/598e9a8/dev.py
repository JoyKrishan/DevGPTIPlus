    # check if image can contain padding & mask
    m_x1 = max(0, x1 - mask_grow)
    m_y1 = max(0, y1 - mask_grow)
    m_x2 = min(width, x2 + mask_grow)
    m_y2 = min(height, y2 + mask_grow)
    m_x1, m_y1, m_x2, m_y2 = int(m_x1), int(m_y1), int(m_x2), int(m_y2)
    p_x1 = max(0, x1 - padding)
    p_y1 = max(0, y1 - padding)
    p_x2 = min(width, x2 + padding)
    p_y2 = min(height,y2 + padding)
    p_x1, p_y1, p_x2, p_y2 = int(p_x1), int(p_y1), int(p_x2), int(p_y2)
    mask = np.zeros([height, width, 3])
    mask[m_y1:m_y2, m_x1:m_x2] = 255
    mask = mask[p_y1:p_y2, p_x1:p_x2]
    image = np.array(pose_image)[p_y1:p_y2, p_x1:p_x2]
    image = Image.fromarray(image.astype(np.uint8))

    original_width, original_height = image.size
    kps -= [p_x1, p_y1]
        image = resize_img(image)
        new_width, new_height = image.size
    control_image = draw_kps(image, kps)
    # (mask, pose, control), (original positon face + padding: x, y, w, h)
    return (mask, image, control_image), (p_x1, p_y1, original_width, original_height)