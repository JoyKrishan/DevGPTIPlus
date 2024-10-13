#!/bin/bash

# Set environment variables from secrets
export SECRET_ENV_VAR_1="${{ secrets.SECRET_1 }}"
export SECRET_ENV_VAR_2="${{ secrets.SECRET_2 }}"
# ... (add more secrets here)

# Run the provided command
"$@"