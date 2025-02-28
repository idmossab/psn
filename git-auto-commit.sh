#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
    echo "⚠️  Please provide a commit message!"
    exit 1
fi

# Add all changes
git add .

# Commit with the provided message
git commit -m "$1"

# Push changes to the main branch
git push origin master

echo "✅ Changes have been successfully pushed!"

#chmod +x git-auto-commit.sh ==> for permission