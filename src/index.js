import { loadDOM } from './DOM.js';
import { openForm } from './forms.js';
import { createProject } from './project.js';
import { addProject } from './project.js';
import { loadProject } from './DOM.js';
import { loadTask } from './DOM.js';
import './style.css';

loadDOM()

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
    loadProject(newProject);
}

const submitTask = (name, details, date) => {
    const newTask = createTask(name, details, date);
    loadTask(newTask);
}

export { 
    submitProject,
    submitTask
};
