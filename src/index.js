import { loadDOM } from './DOM.js';
import { openForm } from './forms.js';
import { createProject } from './project.js';
import { createTask } from './task.js';
import { addProjectArray } from './project.js';
import { addTaskArray } from './task.js';
import { appendProject } from './DOM.js';
import { appendTask } from './DOM.js';
import './style.css';

loadDOM()

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');

let allProjects = [{project: 'Sample Project'}];
console.log(allProjects[0].project)

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
    addProjectArray(allProjects, newProject);
    appendProject(project);
    saveStorage();
    console.log(allProjects);
}

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    addTaskArray(allProjects, newTask);
    appendTask(name);
    saveStorage();
    console.log(allProjects);
}

function saveStorage () { 
    localStorage.setItem('MyList', JSON.stringify(allProjects));
}

function getStorage (){
    return JSON.parse(localStorage.getItem('MyList'));
}

export { 
    submitProject,
    submitTask
};
