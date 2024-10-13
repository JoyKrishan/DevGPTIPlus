# Creates a http server to serve the game files for local testing.
# default path is "LifeQuest/Export" relative to the server.py file.

# Script code to serve the game files over HTTP for local testing.
# Provided by the game engine developers.

# ai-gen start (ChatGPT-3.5, 0)
# Only the comments are done by the AI!
# 0 intervantion outside comments


# Import necessary libraries.
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
# Custom HTTPServer class to handle dual-stack (IPv4 and IPv6) network configurations.
        # Try to enable dual-stack support. This may raise an exception on non-dual-stack environments,
        # which we silently ignore.
# Custom request handler that adds Cross-Origin Resource Sharing (CORS) headers.
        # Add headers to both allow CORS and ensure the policies on cross-origin sharing are strict.
# Function to open a URL in the default system browser.
    # Handles different OS-specific commands to open a URL in the default browser.
# Function to start the server and optionally open a browser.
    os.chdir(root)  # Change the working directory to the root directory of the server.
        # Optionally open the served page in the user's default browser.
    # Start the server with the given settings.
# Command-line interface setup.
    # Ensures the script executes in the directory it's stored in.
    # Call the function to serve files and potentially open a web browser.
    serve(args.root, args.port, args.browser)

   # ai-gen end