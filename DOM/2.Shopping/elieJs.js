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
    console.log(text);
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
    const item = creatItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 인풋을 초기화한다.
    input.value ='';
    // 포커스는 다시 커서가 생기는 것을 말한다.
    input.focus();
}
function creatItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class','item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item__delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.addEventListener('click', ()=>{
        // 여기서 itemRow는 추가될때마다 타켓이 다르다. -> 각각의 삭제버튼은 각각의 itemRow를 갖는다.
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    item.appendChild(name);
    item.appendChild(deleteBtn);

    return itemRow;
}

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        onAdd();
    }
})

addBtn.addEventListener('click', ()=>{
    onAdd();
})

/*
- DOM을 이해하고 DOM에 관련된 API를 이용하여 추가,삭제,변경을 해야한다.
- .focus()란?
- 동적인 DOM요소를 추가할땐 innerHTML을 지양하는 것이 좋다.
- DOM요소를 추가할때 DOM에 관한 이벤트핸들링도 같이 한다. -> js는 한번만 랜더링된다는 것을 잊지말자.
- 만일 여러 DOM에 같은 이벤트를 할당할때 반복문을 통하여 할당하는 것이 좋은가?
- 형식이 같은 DOM요소들이더라도 이 요소들을 어떻게 구분하는가?
*/