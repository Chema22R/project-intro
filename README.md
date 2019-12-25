[![Total alerts](https://img.shields.io/lgtm/alerts/g/Chema22R/project-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/project-intro/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Chema22R/project-intro.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Chema22R/project-intro/context:javascript)
[![dependencies Status](https://david-dm.org/chema22r/project-intro/status.svg)](https://david-dm.org/chema22r/project-intro)
[![devDependencies Status](https://david-dm.org/chema22r/project-intro/dev-status.svg)](https://david-dm.org/chema22r/project-intro?type=dev)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

# Project Intro
Simple UI modal to introduce a project.

Check out a live demo [here](https://printersdiscovery.chema22r.com/).

## Setup and Run
1. Download the source code
2. Install the node modules executing `npm i`
3. Execute the command `npm run build` to build the application

* To run an example of the module, use the command `npm start` instead of the one specified in step 3

## Code to run the module
1. HTML code:
    ```html
    <div id="projectIntroContainer" class="projectIntroContainer">
        <div class="projectIntroBack" onclick="projectIntro.fadeOut()"></div>
        <div id="projectIntroContent" class="projectIntroContent">
            <img id="projectIntroImg" src="<IMAGE>">
            <div id="projectIntroText">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.<br>Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.<br>Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <span onclick="projectIntro.fadeOut()">&times;</span>
        </div>
    </div>
    ```
2. JS code:
    ```js
    import * as projectIntro from "project-intro";
    window.projectIntro = projectIntro;
    projectIntro.init();
    ```

* The provided image will be resized to fit the assigned space, but the perfect size would be 300x350p
* To implement the module in a non-NPM environment, each project file must be imported individually, as in the example provided in `/development/index.js`. The following code can be used instead of the one specified in step 2, replacing the routes with the correct ones:
    ```js
    import "./projectIntro.css";
    import * as projectIntro from "./projectIntro";

    window.projectIntro = projectIntro;
    projectIntro.init();
    ```

## Directory Structure
```
|- /development
    |- example.html
    |- index.js
|- /dist
    |- project-intro.js
    |- project-intro.js.map
|- /src
    |- index.js
    |- projectIntro.css
    |- projectIntro.js
|- .gitignore
|- LICENSE
|- README.md
|- _config.yml
|- package.json
|- webpack.config.js
|- webpack.dev.js
|- webpack.prod.js
```
