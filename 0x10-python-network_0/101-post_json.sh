#!/bin/bash
# to send a JSON POST request to a URL+display the body of the response.
curl -s -H "Content-Type: application/json" -d "$(cat "$2")" "$1"
