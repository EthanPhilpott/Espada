"use strict"

let jobs = document.getElementsByClassName('job');

for (let i = 0; i < jobs.length; i++) {
    jobs[i].href = `hire.html#?selc=${i + 1}`
}

