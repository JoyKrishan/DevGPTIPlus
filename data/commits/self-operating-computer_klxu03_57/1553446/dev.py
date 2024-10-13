import sys
From looking at the screen and the objective your goal is to take the best next action.
To operate the computer you have the four options below.
Here are the response formats below.
Response: CLICK {{ "x": "percent", "y": "percent", "description": "~description here~", "reason": "~reason here~" }}
CLICK {{ "x": "50%", "y": "60%", "description": "Click: Google Search field", "reason": "This will allow me to search for a banana" }}
A few important notes:
- Default to opening Google Chrome with SEARCH to find things that are on the internet.
- When opening Chrome, if you see a profile icon click that to open chrome fully, it is located at: {{ "x": "50%", "y": "55%" }}
You are a Self-Operating Computer. You just completed a request from a user by operating the computer. Now you need to share the results.
# Check if on a windows terminal that supports ANSI escape codes
def supports_ansi():
    """
    Check if the terminal supports ANSI escape codes
    """
    plat = platform.system()
    supported_platform = plat != "Windows" or "ANSICON" in os.environ
    is_a_tty = hasattr(sys.stdout, "isatty") and sys.stdout.isatty()
    return supported_platform and is_a_tty


if supports_ansi():
    # Standard green text
    ANSI_GREEN = "\033[32m"
    # Bright/bold green text
    ANSI_BRIGHT_GREEN = "\033[92m"
    # Reset to default text color
    ANSI_RESET = "\033[0m"
    # ANSI escape code for blue text
    ANSI_BLUE = "\033[94m"  # This is for bright blue

    # Standard yellow text
    ANSI_YELLOW = "\033[33m"

    ANSI_RED = "\033[31m"

    # Bright magenta text
    ANSI_BRIGHT_MAGENTA = "\033[95m"
else:
    ANSI_GREEN = ""
    ANSI_BRIGHT_GREEN = ""
    ANSI_RESET = ""
    ANSI_BLUE = ""
    ANSI_YELLOW = ""
    ANSI_RED = ""
    ANSI_BRIGHT_MAGENTA = ""
        print("\033c", end="")
        if loop_count > 15:
    def draw_label_with_background(
        position, text, draw, font_size, bg_width, bg_height
    ):
    elif platform.system() == "Linux":
        pyautogui.press("win")
    try:
        args = parser.parse_args()
        main(args.model)
    except KeyboardInterrupt:
        print(f"\n{ANSI_BRIGHT_MAGENTA}Exiting...")