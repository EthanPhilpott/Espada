"use strict"

let url = window.location.href;
let selc = url.split('=')[1];
const selcBox = document.getElementById('packageType')

Select(selc)

function Select (selc) {
    switch (selc) {
        case '1':
            selcBox.getElementsByTagName('*')[0].setAttribute('selected', 'selected')
            break;
        case '2':
            selcBox.getElementsByTagName('*')[1].setAttribute('selected', 'selected')
            break;
        case '3':  
            selcBox.getElementsByTagName('*')[2].setAttribute('selected', 'selected')
            break;
        case '4':
            selcBox.getElementsByTagName('*')[3].setAttribute('selected', 'selected')
            break;
        case '5':
            selcBox.getElementsByTagName('*')[4].setAttribute('selected', 'selected')
            break;
    }
}

const popup  = document.getElementById('popup')
const submit1 = document.getElementById('sub1')

submit1.addEventListener('click', () => {
    console.log('hit')
    popup.style.display = "block";
    setTimeout(() => {
        window.onclick = () => {
            popup.style.display = "none"
            window.onclick = () => {}
        }
    }, 1000)
})

