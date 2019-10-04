"use strict";

export function init() {
    document.body.classList.add("noScroll");

    document.getElementById("projectIntroContainer").style.display = "flex";
    document.getElementById("projectIntroContent").style.maxWidth = document.getElementById("projectIntroImg").offsetWidth + "px";
    document.getElementById("projectIntroText").style.display = "unset";
    document.getElementById("projectIntroText").scrollTop = 0;

    setTimeout(() => {
        document.getElementById("projectIntroContent").style.maxWidth = "900px";
    }, 500);

    setTimeout(() => {
        document.getElementById("projectIntroText").style.overflow = "auto";
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