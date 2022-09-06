'use strict';

//export를 지정한 함수는 다른 외부에서 참조할 수 있는 클래스가 됨
// 예를 들어 main.js에서 popup.js를 import하면 popup.js안에 있는 PopUp클래스를 사용할 수 있음
export default class PopUp {

    constructor(){
        // 맴버변수
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click',()=>{
            this.onClick && this.onClick();
            this.hide();

        });
    }

    setClickLinstener(onClick){
        this.onClick = onClick;
    }

    hide(){
        this.popUp.classList.add('pop-up--hide');
    }

    showWithText(text){
        this.popUpText.innerHTML = text;
        this.popUp.classList.remove('pop-up--hide');
    }

}