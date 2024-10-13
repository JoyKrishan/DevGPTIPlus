## Manual Install (Windows, Linuxm, macOS)
 1. Clone this repo:
```
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI
```

 2. Put your Stable Diffusion checkpoints (the huge ckpt/safetensors files) into the `models/checkpoints` folder. You can download SD v1.5 using the following command:
```shell
curl -L https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt -o ./models/checkpoints/v1-5-pruned-emaonly.ckpt
```
 3. Put your VAE into the `models/vae` folder.
 4. (Optional) Create a virtual environment:
    1. Create an environment:
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

 5. Then, run the following command to install `comfyui` into your current environment. This will correctly select the version of pytorch that matches the GPU on your machine (NVIDIA or CPU on Windows, NVIDIA AMD or CPU on Linux):
```shell
