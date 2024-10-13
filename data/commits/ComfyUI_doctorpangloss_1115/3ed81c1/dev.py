"""
The package index to torch built against CPU features.
Non-nightlies are selected when building Linux on arm64.
"""
cpu_torch_index = "https://download.pytorch.org/whl/cpu"

def _is_linux_arm64():
    os_name = platform.system()
    architecture = platform.machine()

    return os_name == 'Linux' and architecture == 'aarch64'


    elif _is_linux_arm64():
        index_urls += [cpu_torch_index]