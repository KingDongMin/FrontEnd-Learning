var APP = document.querySelector('.APP');
var input = document.querySelector('.input');
var APPlist = document.querySelector('.APP__list');
const addBtn = document.querySelector('.AddBtn');

let idIndex = 0;

function addAppList(inputValue){
    if(inputValue ===''){
        input.focus();
        return;
    }
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id',idIndex);
    APPlist.appendChild(itemRow);
    
    itemRow.innerHTML = `
                <div class="item">
                    <span class="item__name">${inputValue}</span>
                    <button class="item__deleteBtn">
                        <i class="fa-solid fa-trash" data-id=${idIndex}></i>
                    </button>
                </div>
                <div class="line"></div>
    `;
    idIndex++;
    input.value='';
    input.focus();
    
};

input.addEventListener('keypress',(event)=>{
    let inputValue = event.key;
    if(inputValue === 'Enter')
    {
        console.log("enter press");
        console.log("엔터 후 리스트 생성");
        addAppList(input.value);
    }
});

APP.addEventListener('click', (event)=>{
    var dataId = event.target.dataset.id;
    // console.log(dataId);
    if(dataId){
        const item = document.querySelector(`.item__row[data-id ='${dataId}']`);
        item.remove();
    }
})

addBtn.addEventListener('click' , ()=>{
    addAppList(input.value);
})
