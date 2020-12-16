"use strict"

let pack = document.getElementsByClassName('pack');

for (let i = 0; i < pack.length; i++) {
    pack[i].href = `buy.html#?selc=${i + 1}`
}