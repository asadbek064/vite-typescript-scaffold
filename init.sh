#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
  echo "Usage: ./init.sh <project_name> <author> <email>"
  exit 1
fi

PROJECT_NAME="$1"
PROJECT_AUTHOR="$2"
PROJECT_EMAIL="$3"

# Replace in files
sed -i '' "s/project_name/$PROJECT_NAME/g" package.json README.md
sed -i '' "s/\"author\": \"\"/\"author\": \"$PROJECT_AUTHOR <$PROJECT_EMAIL>\"/g" package.json

echo "Initialized: $PROJECT_NAME by $PROJECT_AUTHOR <$PROJECT_EMAIL>"

# Self-delete
rm -- "$0"
