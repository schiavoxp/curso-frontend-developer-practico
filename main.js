const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.product-detail')
const cartMenuIcon = document.querySelector('.navbar-shopping-cart')
const cartMenuBack = document.querySelector('.shopping-cart__arrow')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);
cartMenuBack.addEventListener('click', closeCartMenu);

function closeCartMenu () {
    if (!cartMenu.classList.contains('inactive')) {
        cartMenu.classList.add('inactive');
    }
}
function closeDesktopMenu () {
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

}
function closeMobileMenu () {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

}

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    closeCartMenu();
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    closeCartMenu();
}

function toggleCartMenu () {
    cartMenu.classList.toggle('inactive');
    closeDesktopMenu();
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

        const productcartFigure = document.createElement('figure');
        const productcartIcon = document.createElement('img');
        productcartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

        productcartFigure.appendChild(productcartIcon);
        productInfoDiv.append(productPrice, productName, productcartFigure);
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