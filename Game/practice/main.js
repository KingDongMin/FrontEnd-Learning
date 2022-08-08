'use strict';

const gameField = document.querySelector(".gameField");
const playBtn = document.querySelector(".play");
const alarm = document.querySelector(".alert");
const redo = document.querySelector(".redo");
const icon = document.querySelector(".icon");

const value = gameField.getBoundingClientRect();
console.log(value.left);
console.log(value.top);


var time = 2;
var sec = "";
let count;
let toggle = true;
let addToggle = true; // 버튼 한번만 추가하기.
let endValue = false;

function timer(){
    sec = time;
    document.querySelector(".time").innerHTML = `${sec.toFixed(2)}`;
    time-=0.1;

    if(time < 0 ){
        
        clearInterval(count);
        document.querySelector(".time").innerHTML = "시간초과";
        time = 2;
        alarm.style.display="flex";
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        toggle = true;
        addToggle = true;
        endValue =true;
    }
}
function rand(min,max){
    return Math.random() * (max - min) + min;
}

function addIcon(){
    for(let i = 0 ; i < 5 ; i++){
        const carrot  = document.createElement('button');
        carrot.setAttribute('class','carrot');
        carrot.style.top = `${rand(value.top+value.height/2,value.height)}px`;
        carrot.style.left = `${rand(value.left,value.left+value.width)}px`;
        carrot.innerHTML='<img src="../img/carrot.png" alt="">';
        icon.appendChild(carrot);
    }
    for(let i = 0 ; i < 5 ; i++){
        const bug  = document.createElement('button');
        bug.setAttribute('class','bug');
        bug.style.top = `${rand(value.top+value.height/2,value.height)}px`;
        bug.style.left = `${rand(value.left,value.left+value.width)}px`;
        bug.innerHTML='<img src="../img/bug.png" alt="">';
        icon.appendChild(bug);
    }
}

redo.addEventListener("click", ()=>{
    count = setInterval(timer,100);
    alarm.style.display="none";
    playBtn.innerHTML = "<i class='fa-solid fa-stop'></i>";
})


playBtn.addEventListener('click', ()=>{
    if(endValue){
        while(icon.firstChild){
            icon.removeChild(icon.firstChild);
            endValue = false;
        };
    }
    
    alarm.style.display="none";
    playBtn.innerHTML = "<i class='fa-solid fa-stop'></i>";
    if(toggle){
        count = setInterval(timer,100);
        toggle = false;
    }else{
        clearInterval(count);
        toggle = true;
    }
    
    // 당근아이콘 한번만 불러오기
    if(addToggle){
        addIcon();
        addToggle = false;
    }
});

// 당근과 벌레 아이콘 클릭시 class값 콘솔창에 출력하기.
gameField.addEventListener('click',(event)=>{
    // 당근 클릭시 당근 콘솔창 출력
    // 당근아이콘은 버튼에 감싸져 있다.
    // 당근아이콘을 클릭하더라도 당근이 클릭되었다고 인식하도록 하기

    const target = event.target.parentNode;
    if(target.className == 'carrot'){
        console.log("당근");
        target.remove();
    }
});

