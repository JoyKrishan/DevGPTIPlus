import sys
from setuptools import setup, find_packages
nvidia_torch_index = "https://download.pytorch.org/whl/nightly/cu118"
"""
Indicates if we're installing an editable (develop) mode package
"""
is_editable = '--editable' in sys.argv or '-e' in sys.argv or (
        'python' in sys.argv and 'setup.py' in sys.argv and 'develop' in sys.argv)

package_data = ['sd1_tokenizer/*', '**/*.json']
if not is_editable:
    package_data.append('web/**/*')
    packages=find_packages(exclude=[] if is_editable else ['custom_nodes']),
    include_package_data=True,
    package_data={
        'comfy': package_data
    },