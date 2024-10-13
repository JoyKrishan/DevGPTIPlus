        image = PIL.Image.open("rate_confirmation.png").convert("RGB")
        
        classes = ['TABLE','CONTACT_INFO','PRICE','FAX_NUMBER','PHONE_NUMBER','ADDRESS','LOGO']
        id2label = {v: k for v, k in enumerate(classes)}
        # Can't pre load word labels if we're doing OCR, basically need to train 
        # the model otherwise it just mislabels/mistokenizes as observed.


        # we have to truncate the data otherwise classification doesnt work
        true_predictions = [id2label[pred] for idx, pred in enumerate(prediction_indices) if not subword[idx]]
        # this is just 0's and 1's.
        print(true_predictions)
        class_color = {'TABLE':"red",'CONTACT_INFO':"blue",'PRICE':"green",'FAX_NUMBER':"purple",'PHONE_NUMBER':"pink",'ADDRESS':"violet",
        'LOGO':"yellow"}

        for prediction, box in zip(true_predictions, bboxes):
                test_img.rectangle(box, outline=class_color[prediction])
                test_img.text((box[0]+12, box[1]-12), text=prediction, fill=class_color[prediction])
