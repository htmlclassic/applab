window.addEventListener("load", function() {
    let isMenuActive = false;

    let menuButton = document.querySelector('.header__menu-button');
    let nav = document.querySelector('.header .nav');
    let navItems  = document.querySelectorAll('.header .nav__item');
    let navList = document.querySelector('.header .nav__list');
    let header = document.querySelector('.header');
    let body = document.querySelector('body');

    // svg burger
    let svgLineList = document.querySelectorAll('.header__svg-item');
    const class1 = 'header__svg-item-1-active';
    const class2 = 'header__svg-item-active';

    function transformMenuIcon() {
        svgLineList[0].classList.toggle(class1);
        svgLineList[1].classList.toggle(class2);
        svgLineList[2].classList.toggle(class2);
    }

    // if viewport's width became bigger than mobile media query breakpoint, hide mobile menu
    window.addEventListener('resize', function() {
        if ((window.matchMedia('(min-width: 892px)').matches)) {
            hideMenu();
        }
    });

    menuButton.addEventListener('click', function() {
        isMenuActive ? hideMenu() : showMenu();
    });


    // closes menu and you jump to a link
    for (let navItem of navItems) {
        navItem.addEventListener('click', function() {
            if (isMenuActive) {
                hideMenu();
            }
        });
    }

    function showMenu() {
        transformMenuIcon();
        
        nav.classList.add('nav_mobile');
        navList.classList.add('nav__list_mobile');

        // lock body scroll while menu is open
        body.classList.add('scroll-locked');

        isMenuActive = true;
    }

    function hideMenu() {
        transformMenuIcon();
        
        nav.classList.remove('nav_mobile');
        navList.classList.remove('nav__list_mobile');
        header.classList.remove('header_mobile');

        // unlock body's scroll
        body.classList.remove('scroll-locked');

        isMenuActive = false;
    }
});