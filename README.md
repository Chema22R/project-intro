[![Total alerts](https://img.shields.io/lgtm/alerts/g/Chema22R/project-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/project-intro/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Chema22R/project-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/project-intro/context:javascript)
[![dependencies Status](https://david-dm.org/chema22r/project-intro/status.svg)](https://david-dm.org/chema22r/project-intro)
[![devDependencies Status](https://david-dm.org/chema22r/project-intro/dev-status.svg)](https://david-dm.org/chema22r/project-intro?type=dev)

# Project Intro
Simple UI modal to introduce a project

Check out a real example of the application from [here](https://printersdiscovery.chema22r.com/).

## Setup and Run
1. Download the source code
2. Install the node modules executing `npm i`
3. Execute the command `npm run build` to build the application

## Code to run the module
1. HTML code:
    ```html
    <div id="projectIntroContainer">
        <div id="projectIntroBack" onclick="projectIntro.fadeOut()"></div>
        <div id="projectIntroContent">
            <img id="projectIntroImg" src="<IMAGE>" alt="Project Introduction Image">
            <p id="projectIntroText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.<br>Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.<br>Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span id="projectIntroExit" onclick="projectIntro.fadeOut()">&times;</span>
        </div>
    </div>
    ```
2. JS code:
    ```js
    import * as projectIntro from "project-intro";
    window.projectIntro = projectIntro;
    projectIntro.init();
    ```

## Directories Structure
```
|- /dist
    |- bundle.js
    |- bundle.js.map
|- /src
    |- index.js
    |- projectIntro.css
    |- projectIntro.js
|- .gitignore
|- LICENSE
|- package.json
|- README.md
|- webpack.config.js
```