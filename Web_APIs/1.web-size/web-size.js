'use strict';

const screenWidth = window.screen.width;
//이 값을 주기 위해서 어떻게 해야하나?
// 아하 그냥 js로 콘텐츠도 보내버리면 된다?
// html태그에 콘텐츠 보내기
const screen = document.querySelector('.screen');
// 아하 내가 지금 이렇게 html의 요소에 접근하기 위해서 dom객체를 사용하고 있구나 ... document사용 해짜나!!!

// dom 객체인 screen의 innerHTML이란 API를 이용하여 해당 HTML태그에 콘텐츠를 추가할 수 있다.

//윈도우 사이즈를 넣어 보자
const screentHeight = window.screen.height;
screen.innerHTML = `window.screen:${screenWidth}, ${screentHeight}`;

let outerWidth = window.outerWidth;
console.log(`콘솔 1 : ${outerWidth}`);

// 웹사이즈가 변경 될때마다 계속 jS를 로드해줘야햐 하나?
//  이벤트 핸들링으로 해야 할듯?

const outer = document.querySelector(".outer");
outer.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerHeight}`;

const inner = document.querySelector(".inner");
inner.innerHTML = `window.inner : ${window.innerWidth}, ${window.innerHeight}`;

// 페이지의 스크롤을 제외한 순수 웹페이지 크기
const client = document.querySelector('.client');
// client.innerHTML = `documentElement.clientWidth: ${document.width}, ${document.height}`;



window.addEventListener('resize', ()=>{
    outer.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerHeight}`;
    inner.innerHTML = `window.inner : ${window.innerWidth}, ${window.innerHeight}`;
    client.innerHTML = `documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
    //  document객체 안에 documentElement가 있구만!!

    
})


//브라우저 크기 동적으로 html에 출력하기
// 1.html을 구성한다.
/*
    2. js로 해당 태그를 부른다 (dom객체 이용 . document)
    3. window에 이벤트(resize)를 건다
    4. 브라우저 사이즈 변경 시 width와 height값을 innnerHTML을 이용하여 할당해준다.
    (그러고 보면 이벤트 핸들링을 이용하면 html을 계속 로드하지 않아도 된다? -> 
        아니 !! JS가 동적인 요소를 처리해주자나!!!)
*/
