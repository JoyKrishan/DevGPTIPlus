   import requests

   # Replace with the name of the package you're interested in
   package_name = "package_name"

   # PyPI URL for the package's JSON data
   url = f"https://pypi.org/pypi/{package_name}/json"

   try:
       # Send a request to the URL
       response = requests.get(url)
       response.raise_for_status()  # Will raise an exception for HTTP errors

       # Extract the data in JSON format
       data = response.json()

       # Extract version numbers from the data
       versions = sorted(data["releases"].keys(), key=lambda s: list(map(int, s.split('.'))), reverse=True)

       # Get the last 10 versions
       last_10_versions = versions[:10]

       print(f"Last 10 versions of {package_name}: {last_10_versions}")
   except requests.RequestException as e:
       print(f"Error fetching data from PyPI: {e}")