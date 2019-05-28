const cartOpenBtn = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');
const closeCartBtn = document.querySelector('#close-cart');
const menuOpenBtn = document.querySelector('#menu-open');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');

export class App {

    constructor()
    {
        cartOpenBtn.addEventListener('click', e => {
            cart.classList.add('show-cart');
            closeCartBtn.addEventListener('click', e => {
                cart.classList.remove('show-cart');
            });
        });

        menuOpenBtn.addEventListener('click', e => {
            menu.classList.add('show-menu');
            closeMenuBtn.addEventListener('click', e => {
                menu.classList.remove('show-menu');
            });
        });
    }

}