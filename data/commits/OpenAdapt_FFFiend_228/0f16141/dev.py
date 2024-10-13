        encoding = processor(image,truncation=True,return_offsets_mapping=True,return_tensors="pt")
        offsets = encoding.pop('offset_mapping')
        bounding_boxes_normalized = encoding.bbox.squeeze().tolist()
        width, height = image.size

        # offset map, subword
        subword = np.array(offsets.squeeze().tolist())[:,0] != 0
        true_boxes = [unnormalize_box(box, width, height) for idx, box in enumerate(bounding_boxes_normalized) if not subword[idx]]
        print(true_boxes)
        