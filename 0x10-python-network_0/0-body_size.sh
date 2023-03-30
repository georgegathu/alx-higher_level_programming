#!/bin/bash

# Check that the script has been called with a URL argument
if [ -z "$1" ]; then
    echo "Please provide a URL as an argument"
    exit 1
fi

# Send a request to the URL using curl, store the response body in a variable
response=$(curl -s -o /dev/null -w "%{size_download}" "$1")

# Display the size of the response body in bytes
echo "The size of the response body is $response bytes"
