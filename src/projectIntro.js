"use strict";

export function init() {
    document.body.classList.add("noScroll");

    const textTitleArray = document.getElementById("projectIntroTitle").innerHTML.split(/\s/).filter((value) => {return value;});
    const textDescrArray = document.getElementById("projectIntroDescr").innerHTML.split(/\s/).filter((value) => {return value;});
    const textTitlespeed = (textTitleArray.length < 10) ? 100 : 1000 / textTitleArray.length;
    const textDescrspeed = (textDescrArray.length < 100) ? 30 : 3000 / textDescrArray.length;

    document.getElementById("projectIntroContainer").style.display = "flex";
    document.getElementById("projectIntroContent").style.maxWidth = document.getElementById("projectIntroImg").offsetWidth + "px";
    document.getElementById("projectIntroText").style.display = "unset";
    document.getElementById("projectIntroText").scrollTop = 0;

    setTimeout(() => {
        document.getElementById("projectIntroContent").style.maxWidth = "900px";
    }, 500);

    setTimeout(() => {
        document.getElementById("projectIntroText").style.minWidth = document.getElementById("projectIntroText").offsetWidth + "px";
        document.getElementById("projectIntroTitle").innerHTML = document.getElementById("projectIntroDescr").innerHTML = "";
        document.getElementById("projectIntroText").style.opacity = "1";

        let timer = -textTitlespeed;
        for (let i=0; i<textTitleArray.length; i++) {
            setTimeout(() => {
                document.getElementById("projectIntroTitle").innerHTML += textTitleArray[i] + " ";
            }, timer += textTitlespeed);
        }

        timer = -textDescrspeed + ((textTitleArray.length < 10) ? 100 : textTitlespeed) * textTitleArray.length;
        for (let i=0; i<textDescrArray.length; i++) {
            setTimeout(() => {
                document.getElementById("projectIntroDescr").innerHTML += textDescrArray[i] + " ";
            }, timer += textDescrspeed);
        }

        setTimeout(() => {
            document.getElementById("projectIntroText").style.minWidth = "unset";
        }, timer);
    }, 2000);
}


export function fadeIn() {
    document.body.classList.add("noScroll");

    document.getElementById("projectIntroContainer").style.display = "flex";
    document.getElementById("projectIntroText").scrollTop = 0;

    setTimeout(() => {
        document.getElementById("projectIntroContainer").style.opacity = 1;
    }, 50);
}


export function fadeOut() {
    document.getElementById("projectIntroContainer").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("projectIntroContainer").style.display = "none";
        document.body.classList.remove("noScroll");
    }, 500);
}