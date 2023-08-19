const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY+totalScrollY}px, 0)`;

    cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY+totalScrollY}px, 0)`;

}

window.addEventListener('mousemove', positionElement)


let clientScrollY = 0;
let totalScrollY = 0;

function updateTotalScrollY() {
    totalScrollY = window.scrollY + clientScrollY;
    console.log(totalScrollY);
}

// document.addEventListener('mousemove', (e1) => {
//     clientScrollY = e1.clientY;
//     updateTotalScrollY();
// })
document.addEventListener('scroll', (e) => {
    updateTotalScrollY();
})