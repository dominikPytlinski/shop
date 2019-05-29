import { Templates } from './modules/Templates.js';

const Template = new Templates();

const cartOpenBtn = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');

const menuOpenBtn = document.querySelector('#menu-open');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const container = document.querySelector('.container');

const curtain = document.querySelector('.curtain');

export class App {

    constructor()
    {
        container.innerHTML = this.Layout('home');

        cartOpenBtn.addEventListener('click', e => {
            this.openCart();
        });

        menuOpenBtn.addEventListener('click', e => {
            menu.classList.add('show-menu');
            setTimeout(() => {
                curtain.style.display = 'block';
            }, 299);
            closeMenuBtn.addEventListener('click', e => {
                menu.classList.remove('show-menu');
                curtain.style.display = 'none';
            });
        });
    }

    Layout(name)
    {
        return Template.setLayout(name);
    }

    openCart()
    {
        cart.classList.add('show-cart');
        cart.innerHTML = this.Layout('cart');

        setTimeout(() => {
            curtain.style.display = 'block';
        }, 299);

        const closeCartBtn = document.querySelector('#close-cart');

        closeCartBtn.addEventListener('click', e => {
            cart.classList.remove('show-cart');
            curtain.style.display = 'none';
        });
    }

}

