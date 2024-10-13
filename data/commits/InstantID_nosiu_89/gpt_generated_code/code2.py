# ...
def main():
    # ...
    image_path = './example_image/medieval-bed.jpeg'
    num_inference_steps = 50
    x0 = np.array(load_image(image_path).resize((1024, 1024)))

    # Convert x0 to a tensor and move it to the same device as the model
    x0_tensor = torch.tensor(x0).permute(2, 0, 1).unsqueeze(0).float() / 255.0  # Normalize the image
    x0_tensor = x0_tensor.to('cuda')  # Move to CUDA device if using GPU

    zts = inversion.ddim_inversion(pipeline, x0_tensor, src_prompt, num_inference_steps, 2)
    # ...