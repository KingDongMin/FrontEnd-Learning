'use strict';
console.log('JS loaded');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const targetRect = target.getBoundingClientRect();
console.log(targetRect);
// targetRect의 값들이 없는 경우는 img가 다 다운로드 되지않은 상태에서 로드되었기 때문이다.
// 이를 해결하기 위해 페이지의 리소스(이미지, CSS)가 다 로드된 후에 'mousemove'이벤트를 처리하도록 한다.
const targetHalfWidth = targetRect.width / 2 ;
const targetHalfHeight = targetRect.height / 2;

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfWidth = targetRect.width / 2 ;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove' , (event)=>{
        const x = event.clientX;
        const y = event.clientY;
    
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
    
        target.style.transform = `translate(${x - targetHalfWidth}px,${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px,${y}px)`;
    
        tag.innerHTML =`${x}px, ${y}px`;
    })

})


