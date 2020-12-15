"use strict"

let resumeButton = document.getElementById('resume-input')
let resumePicture = document.getElementById('resume-pic')

resumeButton.addEventListener('input', (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    resumePicture.src = URL.createObjectURL(e.target.files[0])
}) 

const mainImg = document.getElementById('display-image') 
const title   = document.getElementById('job-title')
const desc    = document.getElementById('job-desc-text')
const reqr    = document.getElementById('reqr')

let url = window.location.href;
let selc = url.split('=')[1]

Select(selc)

let si = document.getElementsByClassName('si');

for (let i = 0; i < si.length; i++) {
    si[i].value = String(i + 1)
    si[i].addEventListener('click', (e) => {
        console.log(e.path[0].value)
        Select(e.path[0].value)
    })
}

function Select (selc) {
    switch (selc) {
        case '1':
            mainImg.src       = `images/police-officer.jpg`
            title.textContent = `Security Guard`
            desc.textContent  = `Secures premises and personnel by patrolling property; monitoring surveillance equipment; inspecting buildings, equipment, and access points; permitting entry. Obtains help by sounding alarms. Prevents losses and damage by reporting irregularities; informing violators of policy and procedures; restraining trespassers.`
            reqr.innerHTML    = 
            `
                <li>21 and older</li>
                <li>GED or High school diploma</li>
                <li>Background check no criminal history</li>
                <li>Guard card</li>
            `
            break;
        case '2':
            mainImg.src       = `images/matial-arts.jpg`
            title.textContent = `Self-Defense Instructor`
            desc.textContent  = `Part Martial arts expert,and part teacher:They have an extensive background in personal safety, martial arts, and defensive fighting.`
            reqr.innerHTML    = 
            `
                <li>25 and older</li>
                <li>Background check no criminal history</li>
                <li>Letter of recommendation from current military or police officer</li>
                <li>3 day, 30 hour program</li>
            `
            break;
        case '3':
            mainImg.src       = `images/solgier.jpg`
            title.textContent = `Specialized Guard`
            desc.textContent  = `Protects the client by escorting,securing and using knowledge in medical and mechanical practices to ensure maximum protection of the client and other employees working with the client.`
            reqr.innerHTML    = 
            `
                <li>21 and older</li>
                <li>2 years of working experience</li>
                <li>GED or Diploma</li>
                <li>Background check no criminal history</li>
                <li>Guard card</li>
                <li>Valid driver's license</li>
                <li>Willingness to be trained in specialities</li>
                <li>Medical</li>
                <li>Mechanic</li>
            `
            break;
        case '4':
            mainImg.src       = `images/camera.jpg`
            title.textContent = `Alarm Specialist`
            desc.textContent  = ` In charge of installing and monitoring alarm and camera  systems in homes. Dispatch the police or service guards to handle incoming calls about security threats and risks. Respond to any alarms going off to ensure the safety of the client and the buildings.`
            reqr.innerHTML    = 
            `
                <li>18 and older</li>
                <li>GED or high school diploma/li>
                <li>Background check no criminal history</li>
            `
            break;
        case '5':
            mainImg.src       = `images/suit.jpg`
            title.textContent = `Butler`
            desc.textContent  = `Answers any calls to the client’s household,greet guests and assist in the planning of events and parties.They may also be required and responsible for other household duties if the need arises.`
            reqr.innerHTML    = 
            `
                <li>2 years of experience in hospitality or customer service</li>
                <li>Certification in safety management or food safety</li>
                <li>Able to adapt to any situation when the need arises</li>
                <li>Traveling is mandatory</li>
                <li>High school diploma or GED</li>
                <li>Background check no criminal history</li>
            `
            break;
        case '6':
            mainImg.src       = `images/driver.jpeg`
            title.textContent = `Chauffeur`
            desc.textContent  = `Employed to drive a motor vehicle, fetch clients,drive them to specific locations and ensure that the client and the company vehicle is at all times safe.`
            reqr.innerHTML    = 
            `
                <li>Assist client with loading and unloading into company vehicle</li>
                <li>Abide by road regulations</li>
                <li>Selecting the fastest routes unless instructed otherwise</li>
                <li>Defensive driving experience required</li>
                <li>Neat appearance</li>
                <li>Ability to work 12/7 on weekend and holidays</li>
                <li>Must be able to interact in an appropriate manner at all times to the client and their company</li>
                <li>Valid driver's license</li>
                <li>Organized and good with time management</li>
                <li>License to transport others in automobiles</li>
                <li>Commercial drivers license</li>
            `
            break;
    }
}

