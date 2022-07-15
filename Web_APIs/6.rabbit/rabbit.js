const btn = document.querySelector(".btn");
const rabbit = document.querySelector(".rabbit");



btn.addEventListener('click', ()=>{

    const rabbitDOM = rabbit.getBoundingClientRect();
    console.log(window.innerHeight);
    const half = window.innerHeight/2;

    // 토끼요소로 가는 여러가지 방법들
    // window.scroll(0, rabbitDOM.top)
//     window.scrollBy(rabbitDOM);
    // window.scrollTo({top:rabbitDOM.top-half, behavior:'smooth'});

    // 이것이 정답!!!
    rabbit.scrollIntoView({behavior:'smooth', block: "center"});
    // scroll 함수가 여러가지가 있으니까 한번 검색하여 찾아 볼것
    // 이렇게 적잘한 API를 찾는 능력을 키워야 한다?
    
})