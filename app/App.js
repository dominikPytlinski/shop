import { Templates } from './modules/Templates.js';

const Template = new Templates();

const cartOpenBtn = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');
const closeCartBtn = document.querySelector('#close-cart');
const menuOpenBtn = document.querySelector('#menu-open');
const menu = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const container = document.querySelector('.container');

const curtain = document.querySelector('.curtain');

export class App {

    constructor()
    {
        this.Layout();

        cartOpenBtn.addEventListener('click', e => {
            cart.classList.add('show-cart');
            setTimeout(() => {
                curtain.style.display = 'block';
            }, 299);
            closeCartBtn.addEventListener('click', e => {
                cart.classList.remove('show-cart');
                curtain.style.display = 'none';
            });
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

    Layout()
    {
        container.innerHTML = Template.setLayout('home');
    }

}

