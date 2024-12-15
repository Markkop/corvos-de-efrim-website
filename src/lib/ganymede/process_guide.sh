#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed"
    exit 1
fi

# Check if argument is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a guide ID (without .json extension)"
    echo "Usage: $0 <guide_id>"
    exit 1
fi

# Get the guide ID from argument
guide_id="$1"
input_file="${guide_id}.json"

# Check if input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: File ${input_file} not found"
    exit 1
fi

# Remove existing directory if it exists and recreate it with raw subdirectory
rm -rf "$guide_id"
mkdir -p "$guide_id/raw"

# Create metadata file (everything except steps)
jq 'del(.steps)' "$input_file" > "$guide_id/raw/$guide_id-metadata.json"

# Create a temporary file to store paths
temp_tree_file=$(mktemp)
echo "$guide_id/raw/$guide_id-metadata.json" > "$temp_tree_file"

# Process each step and create individual files
total_steps=$(jq '.steps | length' "$input_file")
for ((i=0; i<total_steps; i++)); do
    index=$((i + 1))
    file_path="$guide_id/raw/$guide_id-$index.json"
    jq ".steps[$i]" "$input_file" > "$file_path"
    echo "$file_path" >> "$temp_tree_file"
done

# Create tree file with JSON array of paths
jq -R . < "$temp_tree_file" | jq -s . > "$guide_id/$guide_id-tree.json"
rm "$temp_tree_file"

echo "Processing complete. Files created in $guide_id/raw/ directory" 