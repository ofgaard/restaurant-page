console.log('hello world');
import './style.css';
import home from './home.js';
import menu from './menu.js';

const homeBtn = document.querySelector('.btn-home');
const menuBtn = document.querySelector('.btn-menu');
const aboutBtn = document.querySelector('.btn-about');

homeBtn.addEventListener("click", () => {
    const content = document.getElementById('content');
    const homeElement = home();
    
    content.innerHTML = '';
    content.appendChild(homeElement);

});


menuBtn.addEventListener("click", () => {
    const menuElement = menu();
    content.innerHTML = '';
    content.appendChild(menuElement);
});