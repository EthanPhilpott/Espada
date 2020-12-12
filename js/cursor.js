"use strict"

class Cursor {
    constructor () {
        this.cursor = document.createElement('div');
        this.CreateCursorCss()
        this.Events()
        
        this.mouse = {x : 0, x : 0}
        this.translation = {x : 0, y : 0}
    }

    CreateCursorCss () {
        this.cursor.style.position            = "fixed";
        this.cursor.style.display             = "grid";
        this.cursor.style.gridTemplateColumns = "6px 4px 6px";
        this.cursor.style.gridTemplateRows    = "6px 4px 6px";
        this.cursor.style.transform           = "translate(0, 0)";
        this.cursor.style.top                 = "0"
        this.cursor.style.left                = "0"
        this.cursor.style.zIndex              = '99'
        this.cursor.style.pointerEvents       = "none"

        for (let y = 1; y <= 3; y++) {
            for (let x = 1; x <= 3; x++) {
                let temp = document.createElement('div')
                temp.style.gridRow    = `${x} / ${x + 1}`
                temp.style.gridColumn = `${y} / ${y + 1}`
                if ((x % 2 === 0 || y % 2 === 0) && x !== y) {
                    temp.style.backgroundColor = "#827E74"
                    temp.style.border = "1px solid black"
                }
                this.cursor.appendChild(temp)
            }
        }

        document.body.appendChild(this.cursor)
    }

    Events () {
        window.addEventListener ("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            this.translation.x += (this.mouse.x - this.translation.x)
            this.translation.y += (this.mouse.y - this.translation.y)
            
            if (this.translation.x > document.body.clientWidth  - 16) this.translation.x = document.body.clientWidth  - 16;
            if (this.translation.y > document.body.clientHeight - 16) this.translation.y = document.body.clientHeight - 16;

            this.cursor.style.transform = "translate(" + this.translation.x + 'px, ' + this.translation.y + 'px)';
        })
    }
}

let cursor = new Cursor ()