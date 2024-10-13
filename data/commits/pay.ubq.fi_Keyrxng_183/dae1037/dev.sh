    # Rename the file
    newbasefile=$(echo "$basefile" | sed -r 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]' | sed 's/_/-/g')
    newfile=$(dirname "$file")/$newbasefile
    # Update import statements in all TypeScript files
    find . -name '*.ts' -exec sed -i "s|$basefile|$newbasefile|g" {} \;