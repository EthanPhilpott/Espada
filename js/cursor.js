"use strict"
class Cursor {
    constructor () {
        this.cursor = document.createElement('div');
        this.CreateCursorCss()
        this.Events()
    }

    CreateCursorCss () {
        this.cursor.style.position            = "absolute";
        this.cursor.style.display             = "grid";
        this.cursor.style.gridTemplateColumns = "5px 3px 5px";
        this.cursor.style.gridTemplateRows    = "5px 3px 5px";
        this.cursor.style.transform           = "translate(0, 0)";
        this.cursor.style.top                 = "0"
        this.cursor.style.left                = "0"

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
        window.addEventListener('mousemove', (e) => {
            this.cursor.style.transform = `translate(${e.clientX - 6.5 + 'px'}, ${e.clientY - 6.5 + 'px'})`
        })
    }
}

let cursor = new Cursor ()