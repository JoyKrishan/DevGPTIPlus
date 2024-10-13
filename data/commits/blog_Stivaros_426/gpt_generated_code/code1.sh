#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 [TITLE]"
  exit 1
fi

title="$1"
template="---
title: $title
date: $(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")
description:
---

## In Summary (tl;dr)

---"

folder_name=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

if [ -d "content/blog/$folder_name" ]; then
  echo "Folder 'content/blog/$folder_name' already exists. Please provide a unique title."
  exit 1
fi

mkdir -p "content/blog/$folder_name"
file_path="content/blog/$folder_name/index.md"

echo "$template" > "$file_path"
echo "Markdown file created: $file_path"