const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const kartMenu = document.querySelector('.product-detail')
const kartMenuIcon = document.querySelector('.navbar-shopping-cart')
const kartMenuBack = document.querySelector('.shopping-cart__arrow')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
kartMenuIcon.addEventListener('click', toggleKartMenu);
kartMenuBack.addEventListener('click', closeKartMenu);

function closeKartMenu () {
    if (!kartMenu.classList.contains('inactive')) {
        kartMenu.classList.add('inactive');
    }
}
function closeDesktopMenu () {
    if (!desktopMenuMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

}
function closeMobileMenu () {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
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
    closeDesktopMenuMenu();
    closeMobileMenu();
}

function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.setAttribute('alt', product.alt);
        
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productKartFigure = document.createElement('figure');
        const productKartIcon = document.createElement('img');
        productKartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

        productKartFigure.appendChild(productKartIcon);
        productInfoDiv.append(productPrice, productName, productKartFigure);
        productCard.append(img,productInfoDiv);
        cardsContainer.appendChild(productCard);
    }
}

let productList = [];
productList.push({
    name: 'Bicicleta',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: ''
})
productList.push({
    name: 'Television',
    price: 1000,
    image: 'https://imgs.search.brave.com/RMR3HFnUVs9-N9R1a-AbAXHs5lt0Hoo1I6rXEtBlMbQ/rs:fit:527:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/YTFOVVoxTWZCQjVu/eWtDUDFYM1RnSGFH/cSZwaWQ9QXBp',
    alt: ''
})
productList.push({
    name: 'Peluche',
    price: 35,
    image: 'https://imgs.search.brave.com/3ZRSY5LERYLIYV6ueoRd9u0WkbYeOyks3J19p0LHFpw/rs:fit:349:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/eEh6bmJxUXFPaVVK/dmZ6V1JaaklBQUFB/QSZwaWQ9QXBp',
    alt: ''
})

renderProducts(productList);