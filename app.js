'use strict';
let calcElem = document.querySelector("#calc-content");
let screen = document.querySelector("#calc-screen");

function calculatrice(event) {
    let btn = event.target.value
    if (event.target.tagName === "BUTTON") {
        if (btn === 'AC') {
            screen.textContent = "";
        } else if (btn !== '=') {
            screen.textContent += btn;
        }
        else {
            let calcul = eval(screen.textContent);
            screen.textContent = calcul;            
        }
    } 
}

calcElem.addEventListener("click", calculatrice);