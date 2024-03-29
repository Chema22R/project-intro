[![CodeQL](https://github.com/Chema22R/project-intro/actions/workflows/codeql.yml/badge.svg)](https://github.com/Chema22R/project-intro/actions/workflows/codeql.yml)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

# Project Intro
Simple UI modal to introduce a project.

Check out a live demo [here](https://3d-previewer.chema22r.com/).

![Screenshot](https://i.postimg.cc/435D6GXP/Screen-Shot-2020-03-24-at-16-18-48.png)

## Installation
```
npm install project-intro
```

## Code To Run The Module
1. HTML code:
    ```html
    <div id="projectIntroContainer" class="projectIntroContainer">
        <div class="projectIntroBack" onclick="projectIntro.fadeOut()"></div>
        <div id="projectIntroContent" class="projectIntroContent">
            <img id="projectIntroImg" src="<IMAGE>">
            <div id="projectIntroText">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.<br>Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.<br>Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.<br>Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                </p>
            </div>
            <span onclick="projectIntro.fadeOut()">&#10005;</span>
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
