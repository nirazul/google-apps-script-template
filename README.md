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
All projects that are created with `gulp scaffold` are added automatically to this list located at 
`gulp/config/projects.json`.

### Build

#### Build one
Compile a single project and push the distribution files via clasp cli
<br>
**Example:** `gulp build --project-dir="projects/example"`

#### Build all 
Execute the build step for all registered projects.
<br>
**Example:** `gulp build:all` 

### Push
Update the remote files with the distribution files
<br>
**Example:** `gulp clasp-push --project-dir="projects/example"`

### Clean
Remove the files that have been produced by other tasks
<br>
**Example:** `gulp clean --project-dir="projects/example"`

#### Clean js files
Remove only the files that have been created by the `compile-js` task
<br>
**Example:** `gulp clean:compileJs --project-dir="projects/example"`

#### Clean copied files
Remove only the files that have been created by the `copy` task.
<br>
**Example:** `gulp clean:copy --project-dir="projects/example"` 

### Copy
Copy over config files like `.claspignore` or `appsscript.json`
<br>
**Example:** `gulp copy --project-dir="projects/example"`

### Lint js files
Lint project files with `eslint`
<br>
**Example:** `gulp lint-js --project-dir="projects/example"`

### Scaffold a new project
Create a new clasp project
<br>
**Example:** `gulp scaffold --project-dir="projects/example"`

### Scaffold an existing project
Create a clasp project from an existing remote source
<br>
**Example:** `gulp scaffold --project-dir="projects/example" --script-id="{scriptId}"`

### Watch

#### Watch one
Watch a single project folder and recompile/push on changes
<br>
**Example**: `gulp watch --project-dir="projects/example"`

#### Watch all
Watch all project folders
<br>
**Example**: `gulp watch:all`


## Features

- Babel
- Webpack
- Eslint
- Core-js
