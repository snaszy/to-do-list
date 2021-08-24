import { loadDOM } from './DOM.js';
import './style.css';

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');

let projects = [];

newProjectButton.addEventListener('click', loadDOM());
newTaskButton.addEventListener('click', loadDOM());


loadDOM();
