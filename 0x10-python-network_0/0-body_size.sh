#!/bin/bash
# to send a request to an URL with curl+ display the size of the body of the response
curl -s "$1" | wc -c
