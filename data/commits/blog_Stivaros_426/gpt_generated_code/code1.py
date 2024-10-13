import os
import sys

def create_markdown_folder(title):
    template = f"""---
title: {title}
date: 
description:
---

## In Summary (tl;dr)

---"""

    folder_name = title.lower().replace(" ", "_")

    try:
        os.mkdir(folder_name)
    except FileExistsError:
        print(f"Folder '{folder_name}' already exists. Please provide a unique title.")
        return

    file_path = os.path.join(folder_name, f"{folder_name}.md")

    with open(file_path, "w") as file:
        file.write(template)

    print(f"Markdown file created: {file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python create_markdown.py [TITLE]")
    else:
        title = sys.argv[1]
        create_markdown_folder(title)