from setuptools import setup, find_packages, find_namespace_packages
    # todo: figure out how to include the web directory to eventually let main live inside the package
    # todo: see https://packaging.python.org/en/latest/guides/creating-and-discovering-plugins/ for more about adding plugins
    packages=find_packages(where="./", include=['comfy', 'comfy_extras']),
    entry_points={
        'console_scripts': [
            # todo: eventually migrate main here
            'comfyui-openapi-gen = comfy.cmd.openapi_gen:main'
        ],
    },