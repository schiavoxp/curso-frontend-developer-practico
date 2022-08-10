const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const kartMenu = document.querySelector('.product-detail')
const kartMenuIcon = document.querySelector('.shopping-cart__icon')
const kartMenuBack = document.querySelector('.shopping-cart__arrow')

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
kartMenuIcon.addEventListener('click', toggleKartMenu);
kartMenuBack.addEventListener('click', toggleKartMenu);

function closeKartMenu () {
    const isAsideClosed = kartMenu.classList.contains('inactive');
    if (!isAsideClosed) {
        kartMenu.classList.add('inactive');
    }
}

function closeMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    closeKartMenu();
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    closeKartMenu();
}


function toggleKartMenu () {
    kartMenu.classList.toggle('inactive');
    closeMenu();
}