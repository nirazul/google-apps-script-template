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

### Clasp
Manage your GAS code locally in the dev environment you need to be productive!

### Babel
Code is being transpiled via `babel` so you can write es20XX and not think about the consequences.

### Webpack
GAS code is global by default. As javascript developers are *terrible* at modules and stuff, 
this problem has been solved by webpack long ago, so that you can organize your code with `module.export` and `require` 

### Eslint
There is a ton of stuff that you can and will write wrong. `eslint` is there to help and annoy you to death.

### Core-js
As you might know, GAS code is ES3 enhanced with random features from the generations afterwards. 
It's not that horrible, but annoying enough to be annoyed. 
This template provides `core-js` as a module and a polyfill entry point. 
<br>
Adding a polyfill is as easy as adding a line of javascript: `require('core-js/modules/es6.array.is-array');`



- Babel transpiling
- Webpack
- Eslint
- Core-js
