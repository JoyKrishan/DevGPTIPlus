    elif user_platform == "Darwin":
        x = float(x[:-1]) # convert x from "50%" to 50.
        y = float(y[:-1])

        x = (x/100) * monitor_size['width'] # convert x from 50 to 0.5 * monitor_width
        y = (y/100) * monitor_size['height']

        x1, y1 = int(x - ACCURATE_PIXEL_COUNT/2), int(y - ACCURATE_PIXEL_COUNT/2)

        width = ACCURATE_PIXEL_COUNT
        height = ACCURATE_PIXEL_COUNT
        # Use the screencapture utility to capture the screen with the cursor
        rect = f"-R{x1},{y1},{width},{height}"
        print("rect", rect)
        subprocess.run(["screencapture", "-C", rect, file_path])

        screenshots_dir = "screenshots"
        grid_screenshot_filename = os.path.join(screenshots_dir, "screenshot_mini_with_grid.png")

        add_grid_to_image(file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT/2))