        import tensorflow as tf

        image = Image.open("rate_confirmation.png").convert("RGB")

        encoding = processor(image,truncation=True,return_tensors="pt")
        # we have to truncate the data otherwise classification doesnt worm
        token_classifier = LayoutLMv2ForTokenClassification.from_pretrained('microsoft/layoutlmv2-base-uncased')
        # iffy on the model tbh
        ocr_output = processor.tokenizer.decode(encoding['input_ids'][0])
        print(ocr_output)
        bounding_boxes_normalized = encoding['bbox'][0]
        print(bounding_boxes_normalized)
        classification_output = token_classifier(**encoding)
        prediction_indices = classification_output.logits.argmax(-1).squeeze().tolist()
        print(prediction_indices)