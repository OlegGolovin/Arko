/* ===== Клик по бургеру ===== */
let burger = document.querySelector('#burger-icon');
burger.addEventListener('click', () => {
    // let navBar = document.querySelector('.navbar');
    //  let Body = document.querySelector('body');
    //если кликнута иконка бургера то открываем либо закрываем меню
    burger.classList.toggle('fa-times');
    // navBar.classList.toggle('active');
    //  Body.classList.toggle('lock');
});

