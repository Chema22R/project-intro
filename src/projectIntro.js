"use strict";

const mobileType = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile/i) && navigator.userAgent.match(/Mobile/i);

export function init() {
    document.body.classList.add("noScroll");

    document.getElementById("projectIntroContainer").style.display = "flex";
    document.getElementById("projectIntroContent").style.maxWidth = document.getElementById("projectIntroImg").offsetWidth + "px";
    mobileType ? document.getElementById("projectIntroContent").classList.add("mobile") : null;
    document.getElementById("projectIntroText").style.display = "unset";
    document.getElementById("projectIntroText").scrollTop = 0;

    setTimeout(() => document.getElementById("projectIntroContent").style.maxWidth = "900px", mobileType ? 0 : 500);
    setTimeout(() => document.getElementById("projectIntroText").style.overflow = "auto", mobileType ? 0 : 2000);
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