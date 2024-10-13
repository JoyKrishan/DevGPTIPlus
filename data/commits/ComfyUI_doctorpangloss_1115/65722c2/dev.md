## Manual Install (Windows, Linux, macOS) and Development
    ```shell
    git clone https://github.com/comfyanonymous/ComfyUI.git
    cd ComfyUI
    ```
    ```shell
    curl -L https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt -o ./models/checkpoints/v1-5-pruned-emaonly.ckpt
    ```
       ```shell
       python -m virtualenv venv
       ```
    2. Activate it:
       
       **Windows:**
       ```pwsh
       Set-ExecutionPolicy Unrestricted -Scope Process
       & .\venv\Scripts\activate.ps1
       ```
       
       **Linux, macOS and bash/busybox64.exe on Windows:**
       ```shell
       source ./venv/bin/activate
       ```
    ```shell
    pip install -e .
    ```
 6. To run the web server:
    ```shell
    python main.py
    ```
    Currently, it is not possible to install this package from the URL and run the web server as a module. Clone the repository instead.
    
    To generate python OpenAPI models:
    ```shell
    comfyui-openapi-gen
    ```
    
    You can use `comfyui` as an API. Visit the [OpenAPI specification](comfy/api/openapi.yaml). This file can be used to generate typed clients for your preferred language.