# google-app-script-template
This repository is intended to be a starting point for javascript projects used in scriptable Google Cloud Apps.
It tries to solve the most common tasks when creating and maintaining code for the Google Apps Script environment.

## Usage

1. Install all global and local npm dependencies 
  ```bash
  npm install -g @google/clasp gulp@4
  npm install
  ```
1. If you haven't done yet, log in to clasp and follow the steps
  ```bash
  clasp login
  ```
1. Scaffold a project
  ```bash
  # Use the gulp shortcut
  gulp scaffold --project-dir="MyProject"
  
  # Or do it manually
  mkdir MyProject && cd MyProject
  mkdir src && cd src
  ```
1. Fetch an existing project or create a new one within a src folder
  ```bash
  # Go the the project's base dir
  cd MyProject/src
  
  # Create a new project
  clasp create
  
  # ...or pull an existing one
  clasp pull
  ```
1. You're ready to go! You can build or watch a project or execute a sub task
  ```bash
  # Go to the git project's root
  cd ../..
  
  # Build the project files
  gulp build --project-dir="MyProject"
  
  # Watch a project
  gulp watch --project-dir="MyProject"
  
  # Execute on of the sub tasks
  gulp clean --project-dir="MyProject"
  gulp compile-js --project-dir="MyProject"
  gulp copy --project-dir="MyProject"
  gulp clasp-push --project-dir="MyProject"
  ```

## What's included

Coming soon...
