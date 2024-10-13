import sys
"""
The name of the package.
"""

"""
The current version.
"""
"""
The package index to the torch built with AMD ROCm.
"""
amd_torch_index = "https://download.pytorch.org/whl/rocm5.4.2"

"""
The package index to torch built with CUDA.
Observe the CUDA version is in this URL.
"""
nvidia_torch_index = "https://download.pytorch.org/whl/cu118"

"""
The package index to torch built against CPU features.
This includes macOS MPS support.
"""
cpu_torch_index_nightlies = "https://download.pytorch.org/whl/nightly/cpu"

"""
The xformers dependency and version string.
This should be updated whenever another pre-release of xformers is supported. The current build was retrieved from
https://pypi.org/project/xformers/0.0.17rc482/#history.
"""
xformers_dep = "xformers==0.0.17rc482"

    _alternative_indices = [amd_torch_index, nvidia_torch_index, cpu_torch_index_nightlies]
        index_urls += [nvidia_torch_index]
        _dependencies += [xformers_dep]
        index_urls += [amd_torch_index]
    else:
        index_urls += [cpu_torch_index_nightlies]
    try:
        # pip 23
        finder = PackageFinder.create(LinkCollector(session, SearchScope([], index_urls, no_index=False)),
                                      SelectionPreferences(allow_yanked=False, prefer_binary=False,
                                                           allow_all_prereleases=True))
    except:
        try:
            # pip 22
            finder = PackageFinder.create(LinkCollector(session, SearchScope([], index_urls)),
                                          SelectionPreferences(allow_yanked=False, prefer_binary=False,
                                                               allow_all_prereleases=True)
                                          , use_deprecated_html5lib=False)
        except:
            raise Exception("upgrade pip with\npip install -U pip")