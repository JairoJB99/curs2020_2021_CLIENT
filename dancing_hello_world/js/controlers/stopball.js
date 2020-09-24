'use strict'
import {inicia} from './../main'

export default (function stopBall() {
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            console.log("pulsada");
            inicia.toggle();
        }
    }
})();

