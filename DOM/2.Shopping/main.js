const input = document.querySelector("#item");
const listMain = document.querySelector('.list_main');
const plusBtn = document.querySelector('.plusBtn');
var removeBtn = document.querySelectorAll('.removeBtn');
addEventRemoveBtn();

function inputValueChange() {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <p>${input.value}</p>
    <i class="fa-solid fa-trash-can removeBtn"></i>
    `;
    listMain.appendChild(listItem);
    input.value = '';
    
    addEventRemoveBtn();// 이것은 왜 문제일까?
    // 여기서 innerHTML로 removeBtn을 넣는것 보단 DOM API를 이용하여 추가하면
    // 해당 remove버튼을 매번 다 불러와 이벤트핸들링을 하지 않아도 된다.

}

function inputEnter(event) {
    if(event.keyCode == 13){
        inputValueChange();
    }
}

function addEventRemoveBtn(){
    var removeBtn = document.querySelectorAll('.removeBtn');
    for(let i = 0 ; i < removeBtn.length ; i++){
        removeBtn[i].addEventListener('click', (event)=>{
            listMain.removeChild(event.path[1]);//ul태그안 li를 참조함
        })
        
    }
}

plusBtn.addEventListener('click', ()=>{
    inputValueChange();
})


/*
문제점 : 
- 매번 동적으로 추가 삭제되는 li태그에 removeBtn에 대한 이벤트를 어떻게 걸어야 하는가?
- 새로운 DOM요소가 추가될때 해당 이벤트핸들링도 추가한다. -> 추가한다음 한꺼번에 이벤트를 추가할 필요 없다.
*/
