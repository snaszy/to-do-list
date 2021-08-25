import { loadDOM } from './DOM.js';
import { openForm } from './forms.js';
import './style.css';

loadDOM();

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');

let projects = [];

newProjectButton.addEventListener('click', () => {
    const newProjectForm = openForm();
    newProjectForm.projectForm();
});
newTaskButton.addEventListener('click', () => {
    const newTaskForm = openForm();
    newTaskForm.taskForm();
});