# File to store the timestamp of the last build
TIMESTAMP_FILE=".last_build_timestamp"

# Get the modification timestamp of Dockerfile
MOD_TIMESTAMP=$(date -r Dockerfile +%s)

# Check if the image already exists and if the timestamp has changed
if [ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ] || [ ! -f "$TIMESTAMP_FILE" ] || [ "$MOD_TIMESTAMP" != "$(cat $TIMESTAMP_FILE)" ]; then
  echo "Building the image..."
  # Store the modification timestamp of Dockerfile
  echo "$MOD_TIMESTAMP" > $TIMESTAMP_FILE
  echo "Image exists and is up to date. Starting container..."