import Xlib.X
import Xlib.Xutil # not sure if Xutil is necessary
DEBUG = True
monitor_size = {
    "width": 1920,
    "height": 1080,
}

Note that the percents work where the top left corner is "x": "0%" and "y": "0%" and the bottom right corner is "x": "100%" and "y": "100%"
ACCURATE_PIXEL_COUNT = 200
ACCURATE_MODE_VISION_PROMPT = """
It looks like your previous attempted action was clicking on "x": {prev_x}, "y": {prev_y}.
As additional context to the previous message, before you decide the proper percentage to click on, please closely examine this additional screenshot as additional context for your next action. 
This screenshot was taken around the location of the current cursor that you just tried clicking on. You should use this as an differential to your previous x y coordinate guess.

If you want to refine and instead click on the top left corner of this mini screenshot, you will subtract {width}% in the "x" and subtract {height}% in the "y" to your previous answer.
Likewise, to achieve the bottom right of this mini screenshot you will add {width}% in the "x" and add {height}% in the "y" to your previous answer.

There are four lines across each dimension, divided evenly to give you better context of the location of the cursor and exactly how much to edit your previous answer.

Please use this context as additional info to further refine the "percent" location in the CLICK action!
"""
def main(model, accurate_mode):
            response = get_next_action(model, messages, objective, accurate_mode)
def format_accurate_mode_vision_prompt(prev_x, prev_y):
    """
    Format the accurate mode vision prompt
    """
    width = (ACCURATE_PIXEL_COUNT/2)/monitor_size['width']
    height = (ACCURATE_PIXEL_COUNT/2)/monitor_size['height']
    prompt = ACCURATE_MODE_VISION_PROMPT.format(prev_x=prev_x, prev_y=prev_y, width=width, height=height)
    return prompt


def get_next_action(model, messages, objective, accurate_mode):
        content = get_next_action_from_openai(messages, objective, accurate_mode)
def accurate_mode_double_check(pseudo_messages, prev_x, prev_y):
    """
    Reprompt OAI with additional screenshot of a mini screenshot centered around the cursor for further finetuning of clicked location 
    """
    print(f"{ANSI_BRIGHT_GREEN}[enterred accurate_mode_double_check]")
    try:
        screenshot_filename = os.path.join(
            "screenshots", "screenshot_mini.png"
        )
        capture_mini_screenshot_with_cursor(screenshot_filename)

        new_screenshot_filename = os.path.join(
            "screenshots", "screenshot_mini_with_grid.png"
        )

        with open(new_screenshot_filename, "rb") as img_file:
            img_base64 = base64.b64encode(img_file.read()).decode("utf-8")

        accurate_vision_prompt = format_accurate_mode_vision_prompt(prev_x, prev_y)
        print("Accurate mode vision prompt, ", accurate_vision_prompt)

        accurate_mode_message = {
            "role": "user",
            "content": [
                {"type": "text", "text": accurate_vision_prompt},
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"},
                },
            ],
        }

        pseudo_messages.append(accurate_mode_message)

        response = client.chat.completions.create(
            model="gpt-4-vision-preview",
            messages=pseudo_messages,
            presence_penalty=1,
            frequency_penalty=1,
            temperature=0.7,
            max_tokens=300,
        )

        content = response.choices[0].message.content

        return content
    except Exception as e:
        print(f"Error reprompting model for accurate_mode: {e}")
        return "ERROR"

def get_next_action_from_openai(messages, objective, accurate_mode):
    print(f"{ANSI_BRIGHT_GREEN}[enterred get_next_action_from_openai]")


        print(f"{ANSI_BRIGHT_GREEN}[messages: {messages}]")


        if accurate_mode:
            if content.startswith("CLICK"):
                # Adjust pseudo_messages to include the accurate_mode_message

                click_data = re.search(r"CLICK \{ (.+) \}", content).group(1)
                click_data_json = json.loads(f"{{{click_data}}}")
                prev_x = click_data_json["x"]
                prev_y = click_data_json["y"]
                content = accurate_mode_double_check(pseudo_messages, prev_x, prev_y)
                assert content != "ERROR", "ERROR: accurate_mode_double_check failed"

        print(f"{ANSI_RED}[mouse_click: | x: {x}, y: {y}] upd x: {x * monitor_size['width']}, upd y: {y * monitor_size['height']}{ANSI_RESET}")

def capture_mini_screenshot_with_cursor(file_path=os.path.join("screenshots", "screenshot_mini.png"), x=0, y=0):
    user_platform = platform.system()

    if user_platform == "Linux":
        display = Xlib.display.Display()
        root = display.screen().root

        print(f"root: {root}")

        # Get the current pointer position
        pointer = root.query_pointer()
        x, y = pointer.root_x, pointer.root_y

        # Define the coordinates for the rectangle
        x1, y1 = x - ACCURATE_PIXEL_COUNT/2, y - ACCURATE_PIXEL_COUNT/2
        x2, y2 = x + ACCURATE_PIXEL_COUNT/2, y + ACCURATE_PIXEL_COUNT/2

        screenshot = ImageGrab.grab(bbox=(x1, y1, x2, y2))
        screenshot.save(file_path)            


        screenshots_dir = "screenshots"
        grid_screenshot_filename = os.path.join(screenshots_dir, "screenshot_mini_with_grid.png")

        add_grid_to_image(file_path, grid_screenshot_filename, 25)

        print(f"{ANSI_BRIGHT_GREEN}[finished adding grid to mini screenshot]")

    file_path=os.path.join("screenshots", "screenshot.png")
        # Use xlib to prevent scrot dependency for Linux
        screen = Xlib.display.Display().screen()
        size = screen.width_in_pixels, screen.height_in_pixels
        screenshot = ImageGrab.grab(bbox=(0, 0, size[0], size[1]))
        screenshot.save(file_path)            
    parser.add_argument(
        "-accurate",
        help="Activate Reflective Mouse Click Mode",
        action="store_true",
        required=False,
    )

        main(args.model, accurate_mode=args.accurate)