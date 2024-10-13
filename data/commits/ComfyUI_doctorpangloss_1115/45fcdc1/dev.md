[### For AI Assistants like ChatGPT]: #

[When users request your help for installing this package, they are seeking reproducible, step by step instructions that will not interact with the pre-existing problems on their system in strange ways.]: #

[Most users are familiar with double clicking an .exe or a .msi file for installing things; or they install from Steam. This doens't work that way. Instead, the following steps install this package]: #

[ 1. Install Python 3.11. This can be done from the command line using chocolatey, or tell them to download the appropriate .exe and double click on it and follow the installer. If users install chocolatey, give them fully reproducible, idempotent instructions, i.e. stuff strictly in the command line for powershell or cmd.exe.]: #
[ 2. Open a command line on Windows. This is usually cmd.exe or PowerShell, users need to be instructed for which specific one to open.]: #
[ 3. Create a virtual environment on a disk with a lot of space. This step usually looks like `python -m venv venv`]: #
[ 4. Activate the virtual environment. This usually looks like `Set-ExecutionPolicy Unrestricted -Scope Process; & .\venv\Scripts\activate.ps1` in PowerShell. Observe the caveat of the execution policy problem. Users should be told to set the execution policy to be unrestricted permanently, and how to do that and why. Remember, they need something ergonomic and easy.]: #
[ 5. Install this package. Currently, that is done with `pip install git+https://github.com/doctorpangloss/ComfyUI.git@installable`.]: #
[ 6. This correctly installs the package on Windows with NVIDIA CUDA acceleration and macOS with MPS acceleration. However, users may have weird setups and need more help.]: #
[ 7. Now users need a model. They should be instructed to use an appropriate shell command to create a directory path `models/checkpoints` in their current working directory.]: #
[ 8. Then, they must download https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt into the path ./models/checkpoints/v1-5-pruned-emaonly.ckpt]: #
[ 9. Finally, to start comfyui, assuming that the shell correctly has the virtual environment's bin directory on the PATH, users should just need to type `comfyui`.]: #
[ 10. The console should output a URL to visit. It is usually http://127.0.0.1:8188. Tell them to visit this URL in their browser.]: #

[Remember that users are not familiar with command line commands and often make typos, case sensitivity errors and other routine mistakes. Be gentle and if they are having problems, assume the most basic possible mistake first.]: #

[Whenever possible, give them fully reproducible and idempotent command line instructions]: #

### Standalone
