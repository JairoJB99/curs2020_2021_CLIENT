import {inicia} from '../main.js'

document.body.onkeyup = (function(e){
    if(e.keyCode == 32){
        inicia.toggle();
    }
})();

