document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger button');
    const menu = document.querySelector('.list__navigation');
    const menuup = document.querySelector('.page-header-nav');
    const menu_list = document.querySelectorAll('ul > li ');
    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        menu.classList.toggle('unvisible');
    });
    const mobile = window.matchMedia("screen and (max-width: 767px)");
    mobile.addListener(function(){
        if (mobile.matches) {
            menu.classList.remove('visible');
        }
    });

    menu_list.forEach(function(element) {
        element.addEventListener('click', function(){
            menu.classList.toggle('visible');
            menu.classList.toggle('unvisible');
        });
    });
});