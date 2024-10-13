from whisper_mic import WhisperMic
def main(model, accurate_mode, voice_mode=False, voice_mode=False):
    # Initialize WhisperMic if voice_mode is True if voice_mode is True
    mic = WhisperMic() if voice_mode else None  if voice_mode else None
    # Clear the console
    if voice_mode:
        print(f"{ANSI_GREEN}[Self-Operating Computer]{ANSI_RESET} Listening for your command... (speak now)")
        try:
            objective = mic.listen()
        except Exception as e:
            print(f"{ANSI_RED}Error in capturing voice input: {e}{ANSI_RESET}")
            return  # Exit if voice input fails
    else:
        print(f"{ANSI_GREEN}[Self-Operating Computer]\n{ANSI_RESET}{USER_QUESTION}")
        print(f"{ANSI_YELLOW}[User]{ANSI_RESET}")
        objective = prompt(style=style)
    # Add a voice flag
    parser.add_argument(
        "--voice",
        help="Use voice input mode",
        action="store_true",
    )

    # Add a voice flag
    parser.add_argument(
        "--voice",
        help="Use voice input mode",
        action="store_true",
    )
        main(args.model, accurate_mode=args.accurate, voice_mode=args.voice, voice_mode=args.voice)
