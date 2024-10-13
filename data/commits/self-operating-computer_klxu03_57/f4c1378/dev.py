        screenshot = screenshot.resize((screenshot.width * 4, screenshot.height * 4), Image.LANCZOS)
        add_grid_to_image(file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT))