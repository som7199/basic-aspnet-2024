let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

next.onclick = () => {
    // 슬라이더가 뒤로 가는 애니메이션에서 앞으로 가는 애니메이션으로 변경
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    // 현재 활성 아이템이 마지막 아이템이면 처음 아이템으로, 아니면 다음 아이템으로 설정
    active = active + 1 >= countItem ? 0 : active + 1;
    // 현재 활성 아이템이 첫 번째 아이템일 경우 마지막 아이템으로, 아니면 이전 아이템으로 설정
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    // 현재 활성 아이템이 마지막 아이템인 경우 처음 아이템으로, 아니면 다음 아이템으로 설정
    other_2 = active + 1 >= countItem ? 0 : active + 1; 
    changeSlider();
}

prev.onclick = () => {
    // 뒤로 가는 애니메이션으로 변경
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    //  인덱스가 0보다 작아지면(즉, 첫 번째 항목보다 이전 항목으로 가려는 경우), 마지막 항목으로 순환
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}

const changeSlider = () => {
    // 현재 활성화된 항목 선택 후 활성화 클래스 제거
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2  = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth; // 강제로 reflow를 발생시켜 애니메이션을 다시 적용할 수 있게 함
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 3000);
} 

let autoPlay = setInterval(() => {
    next.click(); 
}, 3000);