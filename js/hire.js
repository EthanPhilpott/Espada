"use strcit"

let resumeButton = document.getElementById('resume-input')
let resumePicture = document.getElementById('resume-pic')

resumeButton.addEventListener('input', (e) => {
    resumePicture.src = URL.createObjectURL(e.target.files[0])
})