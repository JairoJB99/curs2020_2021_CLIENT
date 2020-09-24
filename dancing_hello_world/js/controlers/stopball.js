'use strict'
import {inicia} from './../main'

(function stopBall() {
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            inicia.toggle();
        }
    }
})();
