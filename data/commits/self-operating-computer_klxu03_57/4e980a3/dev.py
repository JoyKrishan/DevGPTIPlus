
                if DEBUG:
                    print(f"Previous coords before accurate tuning: prev_x {prev_x} prev_y {prev_y}")
        screenshot = screenshot.resize((screenshot.width * 2, screenshot.height * 2), Image.LANCZOS) # upscale the image so it's easier to see and percentage marks more visible
        add_grid_to_image(file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT/2))