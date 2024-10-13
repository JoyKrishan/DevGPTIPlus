
        from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification
        image = Image.open("rate_confirmation.png").convert("RGB")
        encoding = processor(image, truncation=True, return_offsets_mapping=True, return_tensors="pt") 
        offset_map = encoding.pop('offset-mapping')

        # we have encoded keys now 


        model = LayoutLMv2ForTokenClassification.from_pretrained(
                 "microsoft/layoutlmv2-base-uncased")      
        
        # forward pass ?
        output = model(**encoding)

        # predictions and token boxes 
        predictions = output.logits.argmax(-1).squeeze().tolist()
        print(predictions)

        token_boxes = encoding.bbox.squeeze().tolist()
        print(token_boxes)

        # have both predictions and token boxes, but i want the labels
        # to be generated themselves..

 

def unnormalize_box(bbox, width, height):
     return [
         width * (bbox[0] / 1000),
         height * (bbox[1] / 1000),
         width * (bbox[2] / 1000),
         height * (bbox[3] / 1000),
     ]