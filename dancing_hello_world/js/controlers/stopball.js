'use strict'
export default document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        console.log("pulsada");
        inicia.toggle();
    }
};

