#!/bin/bash

for file in *.jpg; do
  dimensions=$(sips -g pixelWidth -g pixelHeight "$file" 2>/dev/null | awk '/pixelWidth:/{print $2; getline;} /pixelHeight:/{print $2;}')
  if [[ -n "$dimensions" ]]; then
    width=$(echo "$dimensions" | head -n 1)
    height=$(echo "$dimensions" | tail -n 1)
    echo "$file: ${width}x${height}"
  else
    echo "$file: Error getting dimensions"
  fi
done