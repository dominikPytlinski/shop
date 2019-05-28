const cartOpenBtn = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');
const closeCartBtn = document.querySelector('#close-cart');

export class App {

    constructor()
    {
        cartOpenBtn.addEventListener('click', e => {
            cart.classList.add('show-cart');
            closeCartBtn.addEventListener('click', e => {
                cart.classList.remove('show-cart');
            });
        });
    }

}