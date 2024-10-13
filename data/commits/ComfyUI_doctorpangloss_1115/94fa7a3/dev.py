"""
Packages that should have a specific option set when a GPU accelerator is present
"""
gpu_accelerated_packages = {"rembg": "rembg[gpu]"}

    gpu_accelerated = False
        gpu_accelerated = True
        gpu_accelerated = True
        if candidate.best_candidate is not None:
            if gpu_accelerated and requirement.name in gpu_accelerated_packages:
                _dependencies[i] = gpu_accelerated_packages[requirement.name]
            if any([url in candidate.best_candidate.link.url for url in _alternative_indices]):
                _dependencies[i] = f"{requirement.name} @ {candidate.best_candidate.link.url}"
    setup_requires=["pip", "wheel"],