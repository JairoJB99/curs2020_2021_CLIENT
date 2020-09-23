'use strict'
import app from './../main'

export function stopBall() {
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            app.toggle();
        }
    }
}
