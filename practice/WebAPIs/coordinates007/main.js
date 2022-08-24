// 마우스 좌표를 가져오는 API는 뭐였지??

var target =  document.querySelector('.target');
var lineX = document.querySelector('.lineX');
var lineY = document.querySelector('.lineY');
var coordinates = document.querySelector('.coordinates');
var wing1 = document.querySelector('.wing1');
var wing11 = document.querySelector('.wing11');
var wing5 = document.querySelector('.wing5');
var wing8 = document.querySelector('.wing8');

document.addEventListener('mousemove', (event)=>{
    console.log(`마우스x좌표:${event.screenX} \n 마우스Y좌표:${event.screenY}`);
    target.style.top = `${event.clientY}px`;
    target.style.left = `${event.clientX}px`;
    lineX.style.left=`${event.clientX}px`;
    lineY.style.top=`${event.clientY}px`;
    coordinates.style.top =`${event.clientY}px`;
    coordinates.style.left = `${event.clientX}px`;
    coordinates.innerHTML = `x ; ${event.clientX} , y : ${event.clientY}`;

    // event에서 screen 갑과 client값은 좀 다르다?
    // 아하 client는 우리가 보는 부분의 위치를 나타내고
    // screen부분은 브라우저 창 전체를 나타낸다.
    // 그래서 client와 screen의 Y값이 다르다. 그 이유는 브라우저 창의 검색창부터 
    // 하단창까지 포함한 screen값과 우리가 보는 body부분만을 나타내는 client의 값의 차이다.


    // 활용
    wing1.style.top = `${event.clientY}px`;
    wing1.style.left = `${event.clientX}px`;

    wing11.style.top = `${event.clientY}px`;
    wing11.style.left = `${event.clientX}px`;

    wing5.style.top = `${event.clientY}px`;
    wing5.style.left = `${event.clientX}px`;

    wing8.style.top = `${event.clientY}px`;
    wing8.style.left = `${event.clientX}px`;
})