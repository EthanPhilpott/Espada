"use strict"
class Cursor {
    constructor () {
        this.cursor = document.createElement('div');
        this.CreateCursorCss()
    }

    CreateCursorCss () {
        let curs = [document.createElement('div'), document.createElement('div'), document.createElement('div')]

        curs[0].style.width    = '3px';
        curs[0].style.height   = '8px';

        curs[1].style.width    = '8px';
        curs[1].style.height   = '3px';

        curs[2].style.width   = '3px';
        curs[2].style.height  = '3px';

        for (let cur of curs) {
            cur.style.position = "absolute"
            cur.style.top      = "50%"
            cur.style.left     = "50%"
            this.cursor.appendChild(cur)
        }
        document.appendChild(this.cursor)
    }
}

let cursor = new Cursor ()