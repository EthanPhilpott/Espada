"use strict"
class Cursor {
    constructor () {
        this.cursor = document.createElement('div');
        this.CreateCursorCss()
    }

    CreateCursorCss () {
        this.cursor.style.position            = "absolute";
        this.cursor.style.display             = "grid";
        this.cursor.style.gridTemplateColumns = "5px 3px 5px"
        this.cursor.style.gridTemplateRows    = "5px 3px 5px"

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
}

let cursor = new Cursor ()