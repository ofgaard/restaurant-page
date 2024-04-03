console.log('hello world');
import './style.css';
import home from './home.js';

const content = document.getElementById('content');
const homeElement = home();

content.appendChild(homeElement);