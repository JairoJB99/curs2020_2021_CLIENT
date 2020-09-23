'use strict'
import docReady from './core/core'

 export let inicia = (function() {
    // DOM is loaded and ready for manipulation here
    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random())?1:-1);
    let incY = speed * (Math.round(Math.random())?1:-1);
    let stateApp="run"
    let myApp;

    let dw = function(el){
    
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

        return dw;
    };

    let start = function(){
        console.log("Arrancando");
        stateApp= "run";
        myApp=setInterval(dw(document.getElementById("ball")),50);
    }
    let stop = function(){
        console.log("Parando");
        stateApp= "stop";
        clearInterval(myApp);
    }

    let toggle = function(){
        (stateApp==="run") ? stop(): start()
    }
    return { start: start, toggle: toggle}
    //return { start: start(), toggle: toggle()}
})();

docReady(inicia.start);
