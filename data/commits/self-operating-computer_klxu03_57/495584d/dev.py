import mss
        # Linux screenshot just the current active monitor
        with mss.mss() as sct:
            # Get information of the primary monitor
            monitor = sct.monitors[1]  # Change the index if needed
            # Capture a screenshot of the primary monitor
            screenshot = sct.grab(monitor)
            sct_img = Image.frombytes("RGB", screenshot.size, screenshot.bgra, "raw", "BGRX")
            sct_img.save(file_path) 