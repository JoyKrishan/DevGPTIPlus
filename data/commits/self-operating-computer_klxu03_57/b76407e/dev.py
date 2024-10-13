ACCURATE_PIXEL_COUNT = 200 # mini_screenshot is ACCURATE_PIXEL_COUNT x ACCURATE_PIXEL_COUNT big
It looks like your previous attempted action was clicking on "x": {prev_x}, "y": {prev_y}. This has now been moved to the center of this screenshot.
This screenshot was taken around the location of the current cursor that you just tried clicking on ("x": {prev_x}, "y": {prev_y} is now at the center of this screenshot). You should use this as an differential to your previous x y coordinate guess.
There are four segmenting lines across each dimension, divided evenly. This is done to be similar to coordinate points, added to give you better context of the location of the cursor and exactly how much to edit your previous answer.
    width = ((ACCURATE_PIXEL_COUNT/2)/monitor_size['width']) * 100
    height = ((ACCURATE_PIXEL_COUNT/2)/monitor_size['height']) * 100
        print(f"{ANSI_BRIGHT_GREEN}[prev_x: {prev_x}, prev_y: {prev_y}]")
        capture_mini_screenshot_with_cursor(file_path=screenshot_filename, x=prev_x, y=prev_y)
                print(f"{ANSI_BRIGHT_GREEN}[click_data_json: {click_data_json}]")
        x = float(x[:-1]) # convert x from "50%" to 50.
        y = float(y[:-1])
        print(f"x, y right now {x} {y}")
        print(monitor_size)
        x = (x/100) * monitor_size['width'] # convert x from 50 to 0.5 * monitor_width
        y = (y/100) * monitor_size['height']

        print(f"x, y right now {x} {y}")
        x1, y1 = int(x - ACCURATE_PIXEL_COUNT/2), int(y - ACCURATE_PIXEL_COUNT/2)
        x2, y2 = int(x + ACCURATE_PIXEL_COUNT/2), int(y + ACCURATE_PIXEL_COUNT/2)

        print(f"got x1 y1 x2 y2 {x1} {y1} {x2} {y2}")
        print("saved screenshot")
        add_grid_to_image(file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT/4))
        monitor_size["width"] = size[0]
        monitor_size["height"] = size[1]