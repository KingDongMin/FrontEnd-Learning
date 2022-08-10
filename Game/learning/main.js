'use strict';
// 처음에는 이쁘게 코드를 짜는 것 보단 동작이 되도록 짜는게 중요하다.
// 구조적으로 만드는 것은 동작을 다 구현한 후 나중에 하는 것이다.

const CARROT_SIZE = 80; // 왜 당근 사이즈는 대문자로 선언했나?
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

// 사운드 지정하기
const carrotSound = new Audio('../sound/carrot_pull.mp3');
const alertSound = new Audio('../sound/alert.wav');
const bgSound = new Audio('../sound/bg.mp3');
const bugSound = new Audio('../sound/bug_pull.mp3');
const winSound = new Audio('../sound/game_win.mp3');


let started = false;
let score = 0;
let timer = undefined;

// 당근 , 벌레 클릭 이벤트를 이벤트위임으로 처리하기
// 여기서 onfieldClick을 적어주면 (event)=>{onFieldClick}과 같은 동작이다.
// 즉, event를 건내주기 위해서 ()를 안써도 된다는 것이다.
// 간편하게 함수 이름만 쓰면 된다.
field.addEventListener('click',onFieldClick);

gameBtn.addEventListener('click', ()=>{
    if(started){
        stopGame();
    }else{
        startGame();
    }
    // 게임 시작 여부 변수 설정
});

popUpRefresh.addEventListener('click', ()=>{
    startGame();
    hidePopUp();
});

function startGame(){
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}

function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPLAY❓');
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win){
    started = false;
    hideGameButton();
    if(win){
        playSound(winSound);
    }else{
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win?'YOU WON💥' : 'YOU LOSE💢');

}

function showStopButton(){
    // 버튼아이콘 가져오기
    const icon = document.querySelector('.fas');
    // 아이콘 교체
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function hideGameButton(){
    gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore(){
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(()=>{
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT===score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    },1000);
}

function stopGameTimer(){
    clearInterval(timer);
}

function updateTimerText(time){
    // js에서는 /를 하면 몫 + 소숫점까지 나와버린다. 그래서 math를 쓴다.
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerHTML = `${minutes}:${seconds}`;
}

function showPopUpWithText(text){
    popUpText.innerHTML = text;
    popUp.classList.remove('pop-up--hide');
}

function hidePopUp(){
    popUp.classList.add('pop-up--hide');
}


function initGame(){
    score = 0;
    //다시 시작시 기존 벌레와 당근을 제거
    field.innerHTML='';
    gameScore.innerHTML=CARROT_COUNT;
    //벌래와 당근을 생성한뒤 field에 추가해준다.
    addItem('carrot',CARROT_COUNT,'../img/carrot.png');
    addItem('bug',BUG_COUNT,'../img/bug.png');
}

function onFieldClick(event){
    if(!started){
        return;
    }
    const target = event.target;
    // 클래스이름이 같은지 확인하기 위해서 matches란 함수를 쓴다.
    if(target.matches('.carrot')){
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if(score === CARROT_COUNT){
            
            finishGame(true);
        }
    }else if(target.matches('.bug')){
        
        finishGame(false);
    }
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}




function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}

// 필드안에서 아이템을 뿌려야 함 -> field를 relative, item을 absolute로 지정
function addItem(className, count, imgPath){
    const x1= 0;
    const y1= 0;
    // field안에 당근벌레가 다 들어올 수 있도록 당근벌레사이즈를 고려하여 field값 지정
    const x2 = fieldRect.width -CARROT_SIZE;
    const y2 = fieldRect.height -CARROT_SIZE;
    for(let i = 0 ; i<count ; i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);
        item.setAttribute('src',imgPath);
        item.style.position='absolute';
        const x = randomNuber(x1,x2);
        const y = randomNuber(y1,y2);
        item.style.left= `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNuber(min, max){
    return Math.random() * (max - min) + min;
}

initGame();