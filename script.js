const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');
// loadEventListeners();
const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY + totalScrollY}px, 0)`;

    cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY + totalScrollY}px, 0)`;

}
window.addEventListener('mousemove', positionElement)
let clientScrollY = 0;
let totalScrollY = 0;

function updateTotalScrollY() {
    totalScrollY = window.scrollY + clientScrollY;
}

// document.addEventListener('mousemove', (e1) => {
//     clientScrollY = e1.clientY;
//     updateTotalScrollY();
// })
document.addEventListener('scroll', (e) => {
    updateTotalScrollY();
})


var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onmouseover = getBig;
}
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onmouseout = getSmall;
}

function getBig() {
    cursorBig.style.width = "40px";
    cursorBig.style.height = "40px";
    cursorBig.style.top = "-20px";
    cursorBig.style.left = "-20px";
}
function getSmall() {
    cursorBig.style.width = "20px";
    cursorBig.style.height = "20px";
    cursorBig.style.top = "-11px";
    cursorBig.style.left = "-11px";
}
const spanx=document.getElementById('jobs');
setInterval(changeJob,2000);
var i=0;
function changeJob() {
    const jobs=['Websites','MobileApps','Things','WebApps'];
    spanx.innerText= jobs[i];
    i=(i+1)%jobs.length;
}