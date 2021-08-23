import { loadHeader } from './header.js';
import { loadNav } from './nav.js';
import { loadList } from './list.js';
import './style.css';

console.log('hello world');

const initiatePage = (() => {
    loadHeader();
    loadNav();
    loadList();
})();
