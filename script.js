const timeElement  = document.getElementById('section2');
const dayElement = document.getElementById('section1');
const formatToggle = document.getElementById('section');
let is24HourFromat = true;

formatToggle.addEventListener('click' , () => {
    is24HourFromat = !is24HourFromat
});

function updateTime()
{
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month:'long' , day: 'numeric'};
const dateString = now.toLocaleDateString(undefined, options);
const timeString = is24HourFromat
? now.toLocaleTimeString('en-US', { hour12: false})
: now.toLocaleTimeString('en-US');
dayElement.textContent = `${dateString}`
timeElement.textContent = `${timeString}`;
}

updateTime();
setInterval(updateTime, 1000);