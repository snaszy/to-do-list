import { loadDOM } from './DOM.js';
import { openForm } from './forms.js';
import { createProject } from './project.js';
import { addProject } from './projects.js';
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

const submitProject = (project) => {
    const newProject = createProject(project);
    const newProjectElement = addProject(projects, newProject); 
    loadDOM();
}

export { submitProject };