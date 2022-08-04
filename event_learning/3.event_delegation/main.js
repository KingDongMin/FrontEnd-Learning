const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 보통 함수를 정의할때 이벤트를 정의하는 함수명은 on을 붙인다
function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
    const item = creatItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 인풋을 초기화한다.
    input.value ='';
    // 포커스는 다시 커서가 생기는 것을 말한다.
    input.focus();
}

let id = 0;
function creatItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id', id);

    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class','item__name');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class','item__delete');
    // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');

    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);

    // item.appendChild(name);
    // item.appendChild(deleteBtn);
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete" >
            <i class="fa-solid fa-trash-can" data-id =${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `;
    id++;

    return itemRow;
}

// {내가 만든 이벤트 위임}
// items.addEventListener('click', event=>{
//     console.log(event.target.tagName);
//     if(event.target.tagName == 'I'){
//         console.log(event.target.parentNode.parentNode.parentNode);
//         items.removeChild(event.target.parentNode.parentNode.parentNode);
//     }
// })

items.addEventListener('click', event=>{
    console.log(event.target.dataset.id);
    const id = event.target.dataset.id;
    if(id){
        const item = document.querySelector(`.item__row[data-id='${id}']`);
        item.remove();
    }
    
})


//실습 10: keyUp & keyDown
//keypress = keydown = keyup

// 기존 keypress 이벤트
// input.addEventListener('keypress', (event)=>{
//     if(event.key === 'Enter'){
//         onAdd();
//     }
// })

// iscomposing은 입력이벤트가 다 끝났는지 확인하는 것 -> 두번 입력되는거 막기?
// input.addEventListener('keydown', (event)=>{
//     if(event.isComposing){
//         return;
//     }
//     if(event.key === 'Enter'){
//         onAdd();
//     }
// })


// 실습11 : form태그

// input.addEventListener('keyup', (event)=>{
//     if(event.key === 'Enter'){
//         onAdd();
//     }
// })

// addBtn.addEventListener('click', ()=>{
//     onAdd();
// })

const footer__form = document.querySelector('.footer__form');
footer__form.addEventListener('submit', event=>{
    event.preventDefault();
    onAdd();
})
