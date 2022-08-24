var rabbit = document.querySelector('.rabbit');
var findBtn = document.querySelector('.find');

findBtn.addEventListener('click', ()=>{
    let rabbitDOM = rabbit.getBoundingClientRect();
    console.log(rabbitDOM);
    console.log(window.innerHeight);
    let half = (window.innerHeight)/2

    // window.scrollTo({top:rabbitDOM.top-half});
    rabbit.scrollIntoView({behavior:'smooth'});

    /**
     * 느낀점
     * rabbit의 DOM객체를 가져와서 그 객체의 위치를 가져와도 되지만
     * scrollIntoView라는 메소드를 이용하면 더 간단히 할 수 있었다.
     * 그냥 rabbit의 객체를 가져와 window에서 scroll을 할때 
     * 처음에는 그 객체로 가지만 두번 버튼을 누르면 다시 페이지 맨 상단으로 간다.
     * 왜냐하면 처음 누른 후 rabbit의 top위치가 맨 상단의 위치값을 가지기 때문이다.
    */
});
