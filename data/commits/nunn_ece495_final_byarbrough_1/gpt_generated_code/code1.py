from fastapi import FastAPI, Response
from io import BytesIO
import concurrent.futures
import asyncio

app = FastAPI()

# Import your specific functions like set_seed and optimized_pipe
# from your relevant modules
# from your_module import set_seed, optimized_pipe

def generate_image(prompt: str, seed: int, steps: int):
    """Function to generate image. This will be run in a separate process."""
    set_seed(seed)
    image = optimized_pipe(prompt, num_inference_steps=steps, output_type="pil").images[0]

    image_bytes_io = BytesIO()
    image.save(image_bytes_io, format="JPEG")
    image_data = image_bytes_io.getvalue()

    return image_data

@app.get("/generate_img")
async def generate_img(prompt: str, seed: int=26, steps: int=20):
    """Endpoint to generate and return an image based on the prompt."""
    with concurrent.futures.ProcessPoolExecutor() as executor:
        future = executor.submit(generate_image, prompt, seed, steps)
        image_data = await asyncio.wrap_future(future)

    headers = {
        "Content-Type": "image/jpeg",
    }

    return Response(content=image_data, headers=headers)

# Rest of your FastAPI code...