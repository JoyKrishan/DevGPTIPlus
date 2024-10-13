from datasets import load_dataset

# Load a dataset with multiple splits
dataset = load_dataset('some_dataset_name')

# Check if the 'train' split exists
if 'train' in dataset:
    print("The 'train' split exists!")
else:
    print("The 'train' split does not exist.")