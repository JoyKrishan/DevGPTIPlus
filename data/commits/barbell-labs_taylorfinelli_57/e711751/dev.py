# initialize arrays

    dates = [datetime.datetime.strptime(row['Date'].split('T')[0], "%Y-%m-%d") for row in reader]  
    
# Get unique authors

# Dictionary - Key: Author Value: Color from tab20b, Converts cmap[i] to hex
authcolors = {author: mcolors.to_hex(cmap(i)) for i, author in enumerate(uniqueAuthors)}

# Dictionary - Key: file Value: Number