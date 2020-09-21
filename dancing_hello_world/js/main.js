'use strict'
let myApp
let stateApp="stop"

let inicia = function(el) {
    // DOM is loaded and ready for manipulation here
    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random())?1:-1);
    let incY = speed * (Math.round(Math.random())?1:-1);
    //let el=document.getElementById("el");

    // declaramos la variable dw (antes no estaba)
    let dw = function danceWorld(){
    
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
    return dw;    // retornamos el valor de dw
};

let auxInit = inicia(document.getElementById("ball")); // guardamos el valor que retorne la funcion inicia, para pasarsela como el valor dw antes global

let start =function start(){
    stateApp="run"
    myApp=setInterval(auxInit,50);
    stopBall(stateApp, myApp);
}
docReady(start);
