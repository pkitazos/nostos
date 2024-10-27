for i in {1..4}; do
    input_file="video-$i.mov"
    output_file="video-$i.mp4"
    # optimized_file="optimized-video-$i.mp4"

    echo "Converting $input_file to $output_file..."
    ffmpeg -i "$input_file" -vcodec libx264 -acodec aac "$output_file"

    # echo "Optimizing $output_file to $optimized_file..."
    # qt-faststart "$output_file" "$optimized_file"

    echo "Conversion and optimization completed for $input_file."
    echo ""
done
