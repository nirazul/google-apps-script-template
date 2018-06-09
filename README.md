# google-apps-script-template
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
   # Use the scaffolding task to create a new clasp project
   gulp scaffold --project-dir="projects/example"

   # Or clone an existing project by providing a script id
   gulp scaffold --project-dir="projects/example" --script-id="{scriptId}"

1. You're ready to go! You can build or watch a project or execute a sub task (see next section).
   These are most common tasks you will likely use: 
   ```bash
   
   # Build a project:
   gulp build --project-dir="projects/example"

   # Build all projects
   gulp build:all
   
   # Watch a project
   gulp watch --project-dir="projects/example"

   # Watch all projects
   gulp watch:all
   ```


## Tasks

### General infos

#### Task arguments
Most tasks need a `--project-dir` argument to work properly. It defines, on which project the task is being executed.

#### About `{task}:all` tasks
Some tasks have an additional flavour to execute them on all currently registered projects.
All projects that are created with `gulp scaffold` are added automatically on this list located at 
`gulp/config/projects.json`.

### `gulp build`

#### `gulp build --project-dir="projects/example"`
Compile a project and push the distribution files via clasp cli

#### `gulp build:all`
Execute the build step for all registered projects. 

### `gulp clasp-push`
Update the remote files with the distribution files

### `gulp clean`
Remove the files that have been produced by other tasks

#### `gulp clean:compileJs`
Remove only the files that have been created by the `compile-js` task

#### `gulp clean:copy`
Remove only the files that have been created by the `copy` task. 

### `gulp copy`
Copy over config files like `.claspignore` or `appsscript.json`

### `lint-js`
Lint project files with `eslint`

### `scaffold`
Create a new clasp project

### `watch`
Watch a project folder and recompile/push on changes


## Features
