import Xlib.Xutil  # not sure if Xutil is necessary
ACCURATE_PIXEL_COUNT = (
    200  # mini_screenshot is ACCURATE_PIXEL_COUNT x ACCURATE_PIXEL_COUNT big
)
def main(model, accurate_mode, voice_mode=False):
    mic = WhisperMic() if voice_mode else None if voice_mode else None
        print(
            f"{ANSI_GREEN}[Self-Operating Computer]{ANSI_RESET} Listening for your command... (speak now)"
        )
    width = ((ACCURATE_PIXEL_COUNT / 2) / monitor_size["width"]) * 100
    height = ((ACCURATE_PIXEL_COUNT / 2) / monitor_size["height"]) * 100
    prompt = ACCURATE_MODE_VISION_PROMPT.format(
        prev_x=prev_x, prev_y=prev_y, width=width, height=height
    )

    Reprompt OAI with additional screenshot of a mini screenshot centered around the cursor for further finetuning of clicked location
        screenshot_filename = os.path.join("screenshots", "screenshot_mini.png")
        capture_mini_screenshot_with_cursor(
            file_path=screenshot_filename, x=prev_x, y=prev_y
                    print(
                        f"Previous coords before accurate tuning: prev_x {prev_x} prev_y {prev_y}"
                    )

def capture_mini_screenshot_with_cursor(
    file_path=os.path.join("screenshots", "screenshot_mini.png"), x=0, y=0
):
        x = float(x[:-1])  # convert x from "50%" to 50.
        x = (x / 100) * monitor_size[
            "width"
        ]  # convert x from 50 to 0.5 * monitor_width
        y = (y / 100) * monitor_size["height"]
        x1, y1 = int(x - ACCURATE_PIXEL_COUNT / 2), int(y - ACCURATE_PIXEL_COUNT / 2)
        x2, y2 = int(x + ACCURATE_PIXEL_COUNT / 2), int(y + ACCURATE_PIXEL_COUNT / 2)
        screenshot = screenshot.resize(
            (screenshot.width * 2, screenshot.height * 2), Image.LANCZOS
        )  # upscale the image so it's easier to see and percentage marks more visible
        screenshot.save(file_path)
        grid_screenshot_filename = os.path.join(
            screenshots_dir, "screenshot_mini_with_grid.png"
        )
        add_grid_to_image(
            file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT / 2)
        )
        x = float(x[:-1])  # convert x from "50%" to 50.
        x = (x / 100) * monitor_size[
            "width"
        ]  # convert x from 50 to 0.5 * monitor_width
        y = (y / 100) * monitor_size["height"]
        x1, y1 = int(x - ACCURATE_PIXEL_COUNT / 2), int(y - ACCURATE_PIXEL_COUNT / 2)
        grid_screenshot_filename = os.path.join(
            screenshots_dir, "screenshot_mini_with_grid.png"
        )
        add_grid_to_image(
            file_path, grid_screenshot_filename, int(ACCURATE_PIXEL_COUNT / 2)
        )
    file_path = os.path.join("screenshots", "screenshot.png")
        screenshot.save(file_path)
        main(args.model, accurate_mode=args.accurate, voice_mode=args.voice)