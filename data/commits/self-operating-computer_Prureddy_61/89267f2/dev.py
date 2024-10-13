import PIL
import openai
import requests
import binascii
    except FileNotFoundError as e:
        print(f"File not found: {e}")
        return "Directory/file not found "
    except PermissionError as e:
        print(f"Permission error: {e}")
        return "Permission denied "
    except PIL.ImageError as e:
        print(f"Image error: {e}")
        return "Error with the image processing"
    except IOError as e:
        print(f"I/O error: {e}")
        return "Input/output error"
    except binascii.Error as e:
         print(f"Base64 encoding error: {e}")
         return "Base64 encoding/decoding error"
    except openai.error.OpenAIError as e:
        print(f"OpenAI API error: {e}")
        return "OpenAI API error"
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")
        return "Request error"
    except Exception as e:
        print(f"Unknown error: {e}")
        return "Unknown error occurred"

        
    except FileNotFoundError as e:
        print(f"File not found: {e}")
        return "File not found error"
    except PermissionError as e:
        print(f"Permission error: {e}")
        return "Permission denied error"
    except PIL.ImageError as e:
        print(f"Image error: {e}")
        return "Error with image processing"
    except IOError as e:
        print(f"I/O error: {e}")
        return "Input/output error"
        print(f"Unknown error: {e}")
        return "Unknown error occurred"