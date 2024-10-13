    author_color_map = {}
    used_colors = set()  # Track used colors

    for author in set(authors):
        while True:
            color = generate_random_color()
            if color not in used_colors:
                used_colors.add(color)
                author_color_map[author] = color
                break

    return author_color_map