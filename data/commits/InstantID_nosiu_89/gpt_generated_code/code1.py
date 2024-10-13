def style_aligned_controlnet(ref_style_prompt, depth_map, ref_image, img_generation_prompt, seed):
    try:
        # Previous code for image generation (omitted for brevity)
        # ...

        # Save generated images
        for i, img in enumerate(images):
            if not isinstance(img, Image.Image):
                # Convert to PIL Image if not already
                img = Image.fromarray(img)

            img.save(f"generated_image_{i}.png")

        return images
    except Exception as e:
        print(f"Error in generating images: {e}")