#!/bin/bash

# A script to create and push a new Git repository.

# Create or replace the README.md file
echo "# Learning-Kafka understood the contents of kafka and its behaviour with queue as well as pub-sub model" > README.md

# Initialize a new Git repository in the current directory
git init

# Add and commit the initial file
git add .
git commit -m "Only Commit"

# Add the remote origin
# This URL must be correct for your GitHub repository
git remote add origin https://github.com/Algo-Master/Learning-Kafka.git

# Push the changes to the 'main' branch, which is the modern default
git push -u origin master