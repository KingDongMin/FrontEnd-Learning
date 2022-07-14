const target = document.querySelector('.target');
const horizon = document.querySelector('.horizon');
const vertical = document.querySelector('.vertical');
window.addEventListener('mousemove', (event)=>{
    vertical.style.left= `${event.clientX-1}px`;
    horizon.style.top = `${event.clientY-9}px`;
    target.style.top = `${(event.clientY)-60}px`;
    target.style.left = `${event.clientX-60}px`;
})