import { Templates } from './modules/Templates.js';
import { Services } from './modules/Services.js';

const Template = new Templates();

const cartOpenBtn = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');

const menuOpenBtn = document.querySelector('#menu-open');
const menu = document.querySelector('#menu');

const container = document.querySelector('.container');
const curtain = document.querySelector('.curtain');

export class App {

    constructor()
    {
        container.innerHTML = this.Layout('home');

        cartOpenBtn.addEventListener('click', e => {
            this.OpenCart();
        });

        menuOpenBtn.addEventListener('click', e => {
            this.OpenMenu();
        });
    }

    Layout(name)
    {
        return Template.setLayout(name);
    }

    OpenCart()
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

    OpenMenu()
    {
        menu.classList.add('show-menu');
        menu.innerHTML = this.Layout('menu');

        setTimeout(() => {
            curtain.style.display = 'block';
        }, 299);

        const closeMenuBtn = document.querySelector('#close-menu');

        closeMenuBtn.addEventListener('click', e => {
            menu.classList.remove('show-menu');
            curtain.style.display = 'none';
        });
    }

}

