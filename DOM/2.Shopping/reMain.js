'use strict'
const items = document.querySelector('.items');
const input = document.querySelector('.input');
const plusBtn = document.querySelector('.plusBtn')

function appenItem(value) {
    if(input.value === ''){
        input.focus();
        return;
    }
    const item = document.createElement("li");
    item.setAttribute('class', 'item');
    const name = document.createElement("span");
    name.setAttribute('class', 'name');
    name.textContent = value;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(item);
    })
    item.appendChild(name);
    item.appendChild(deleteBtn);
    items.appendChild(item);

    input.value = '';
    input.focus();
}



input.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        appenItem(input.value);
    }
})

plusBtn.addEventListener('click', ()=>{
    appenItem(input.value);
})
/* 체크
- 함수간 연결은 매개변수를 이용한다.-> 전역변수 input을 각 함수들이 공유하지 않는 것이 좋다 -> 왜? 재활용성?
- creatElement, setAttribute, appendChild
- 사용자 정의 함수 잘 이용하기
*/