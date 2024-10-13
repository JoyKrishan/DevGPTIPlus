import concurrent.futures
import asyncio
def generate_image(prompt: str, seed: int, steps: int) -> bytes:
    """Function to generate image. This will be run in a separate process."""
    return image_bytes_io.getvalue()


@app.get("/generate_img")
async def generate_img(prompt: str, seed: int=26, steps: int=20) -> Response:
    """Uses a diffusion model to generate and return an image based on the prompt.
        Will spawn a new process for each call."""
    
    with concurrent.futures.ProcessPoolExecutor() as executor:
        future = executor.submit(generate_image, prompt, seed, steps)
        image_data = await asyncio.wrap_future(future)