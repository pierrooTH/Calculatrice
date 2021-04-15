'use strict';
let calcElem = document.querySelector("#calc-content");
let screen = document.querySelector("#calc-screen");



function calculatrice(event) {
    let btn = event.target.value
    if (event.target.tagName === "button") {
        if (btn.value === 'AC') {
            screen.textContent = "";
        } else if (btn.value !== '=') {
            screen.textContent += btn;
        } else {
            screen.textContent += btn
        }
    } else {
        return false;
    }
}

function calcul() {}


calcElem.addEventListener("click", calculatrice);