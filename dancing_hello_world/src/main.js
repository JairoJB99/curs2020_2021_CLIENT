'use strict'
import './css/style.css'


import { docReady } from './js/core/core.js'
import './js/controlers/stopball.js'

let inicia = (function () {
    // DOM is loaded and ready for manipulation here

    let stateApp = "run"
    let myAppInterval;
    let element = document.getElementById("ball");

    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random()) ? 1 : -1);
    let incY = speed * (Math.round(Math.random()) ? 1 : -1);

    let moviment = function () {
        // declaramos x y (antes no estaban)
        let x = element.style.left ? parseInt(element.style.left, 10) : 350;
        let y = element.style.top ? parseInt(element.style.top, 10) : 400;

        element.style.left = x + incX + "px";
        element.style.top = y + incY + "px";

        //Detect if we reach X coordinates limits
        if (((x + incX) > (window.innerWidth - 40)) || ((x + incX) <= 0))
            incX = (-1) * incX;

        //Detect if we reach Y coordinates limits
        if (((y + incY) > (window.innerHeight - 40)) || ((y + incY) <= 0))
            incY = (-1) * incY;
    };

    let start = function () {
        stateApp = "run";
        myAppInterval = setInterval(moviment, 50);
    };
    let stop = function () {
        stateApp = "stop";
        clearInterval(myAppInterval);
    };
    let toggle = function () {
        (stateApp === "run") ? stop() : start()
    };
    return { start: start, toggle: toggle }
})();

docReady(inicia.start);

export { inicia };
