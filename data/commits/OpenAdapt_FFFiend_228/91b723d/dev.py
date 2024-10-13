import PIL
        image = PIL.Image.open("load_manifest.png").convert("RGB")
        #print(ocr_output)
        bboxes = [unnormalize_box(box, width, height) for idx, box in enumerate(bounding_boxes_normalized) if not subword[idx]]
        #print(bboxes)
        #print(prediction_indices)

        test_img = PIL.ImageDraw.Draw(image)
        for box in bboxes:
                test_img.rectangle(box, outline="red")
        test_img._image.show()