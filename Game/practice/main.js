'use strict';

const gameField = document.querySelector(".gameField");
const playBtn = document.querySelector(".play");
const alarm = document.querySelector(".alert");
const redo = document.querySelector(".redo");
const icon = document.querySelector(".icon");
const carrotCounter = document.querySelector(".counter>span");
const result = document.querySelector(".result");
const value = gameField.getBoundingClientRect();

var time = 5;
var sec = "";
let count;
let toggle = true;
let addToggle = true; // 버튼 한번만 추가하기.
let endValue = false;
let carrotNumber = 5;
carrotCounter.innerHTML=carrotNumber;

function timer(){
    sec = time;
    document.querySelector(".time").innerHTML = `${sec.toFixed(2)}`;
    time-=0.1;

    if(time < 0 ){
        clearInterval(count);
        document.querySelector(".time").innerHTML = "시간초과";
        time = 5;
        alarm.style.display="flex";
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        toggle = true;
        addToggle = true;
        endValue =true;
        result.innerHTML ='YOU LOSE😫';
        
    }
}

// 랜덤 함수
function rand(min,max){
    return Math.random() * (max - min) + min;
}

function addIcon(){
    //당근 
    for(let i = 0 ; i < 5 ; i++){
        const carrot  = document.createElement('button');
        carrot.setAttribute('class','carrot');
        carrot.style.top = `${rand(value.top+value.height/2,value.height)}px`;
        carrot.style.left = `${rand(value.left,value.left+value.width)}px`;
        carrot.innerHTML='<img src="../img/carrot.png" alt="">';
        icon.appendChild(carrot);
    }
    //벌레
    for(let i = 0 ; i < 5 ; i++){
        const bug  = document.createElement('button');
        bug.setAttribute('class','bug');
        bug.style.top = `${rand(value.top+value.height/2,value.height)}px`;
        bug.style.left = `${rand(value.left,value.left+value.width)}px`;
        bug.innerHTML='<img src="../img/bug.png" alt="">';
        icon.appendChild(bug);
    }
    // 만드는 코드가 겹치니 함수로 만들어서 사용해도 될듯한데,,,
}

redo.addEventListener("click", ()=>{
    if(endValue){
        while(icon.firstChild){
            icon.removeChild(icon.firstChild);
            endValue = false;
        };
    }
    addIcon();
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
        carrotNumber=5 ;
        carrotCounter.innerHTML=carrotNumber;
        addIcon();
        addToggle = false;
    }
});

// 당근과 벌레 아이콘 클릭시 class값 콘솔창에 출력하기.
gameField.addEventListener('click',(event)=>{
    // 당근 클릭시 당근 콘솔창 출력
    // 당근아이콘은 버튼에 감싸져 있다.
    // 당근아이콘을 클릭하더라도 당근이 클릭되었다고 인식하도록 하기
    if(!event.target.parentNode){
        return;
    }
    const target = event.target.parentNode;
    if(target.className == 'carrot'){
        console.log("당근");
        target.remove();
        carrotNumber--;
        carrotCounter.innerHTML=carrotNumber;
        if(carrotNumber <= 0){
            result.innerHTML ='YOU WIN😄';
            clearInterval(count);
            alarm.style.display="flex";
            time=5;
            carrotNumber=5 ;
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            carrotCounter.innerHTML=carrotNumber;
            toggle = true;
            addToggle = true;
            endValue =true;
        }
    }else if(target.className == 'bug'){
        console.log("벌레");
        //벌레를 누르면 게임오버
        time = -1;
        
    }
});


