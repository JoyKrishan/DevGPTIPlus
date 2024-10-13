            
            if isinstance(ds, DatasetDict):
                if config_dataset.split and config_dataset.split in ds:
                    ds = ds[config_dataset.split]
                elif split in ds:
                    ds = ds[split]
                else:
                    raise ValueError(
                        f"no {split} split found for dataset {config_dataset.path}, you may specify a split with 'split: `"
                    )