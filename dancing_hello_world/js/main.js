'use strict'
import docReady from './core/core.js'
import stopBall from './controlers/stopball'

 export let inicia = (function(el) {
    // DOM is loaded and ready for manipulation here
    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random())?1:-1);
    let incY = speed * (Math.round(Math.random())?1:-1);
    //let el=document.getElementById("el");
    let stateApp="run"
    let myApp;

    let dw = function(){
    
        // declaramos x y (antes no estaban)
        let x =  el.style.left?parseInt(el.style.left,10):350;
        let y =  el.style.top?parseInt(el.style.top,10):400;

        el.style.left =  x + incX +"px";
        el.style.top = y + incY+"px";
    
        //Detect if we reach X coordinates limits
        if (((x+incX) > (window.innerWidth-40)) || ((x+incX)<=0))
            incX = (-1)*incX;
       
        //Detect if we reach Y coordinates limits
        if (((y+incY) > (window.innerHeight-40)) || ((y+incY) <= 0))
            incY = (-1)*incY;
    }

    let start = (function(){
        stateApp= "run";
        myApp=setInterval(dw(document.getElementById("ball")),50);
    })
    let stop = (function(){
        stateApp= "stop";
        myApp=setInterval(dw(document.getElementById("ball")),50);
    })

    let toggle = function(){
        (stateApp==="run") ? stop(): start()

    }
    return { start: start, toggle: toggle}
})();

docReady(inicia.start);
