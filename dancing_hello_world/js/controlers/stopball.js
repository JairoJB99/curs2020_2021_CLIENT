'use strict'
import {inicia} from '../main.js'

export default a = function() {
    document.body.onkeyup = (function(e){
    if(e.keyCode == 32){
        inicia.toggle();
    }
})();
}
