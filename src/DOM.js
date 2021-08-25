import Logo from './images/logo.png';
import Task from './task.js'
import Project from './project.js'

const loadDOM = (task, project) => {
    const mainHeader = document.getElementById('content');

    const loadHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.id = 'header-div';
        mainHeader.appendChild(headerDiv)

        const headerLogo = document.createElement('img');
        headerLogo.id = 'header-logo';
        headerLogo.src = Logo;
        headerDiv.appendChild(headerLogo);
    };

    const loadNav = (project) => {
        const projectDiv = document.createElement('div');
        projectDiv.id = 'nav-div';
        mainHeader.appendChild(projectDiv)

        const projectTitle = document.createElement('h2');
        projectTitle.id = 'project-title';
        projectTitle.textContent = 'Projects';
        projectDiv.appendChild(projectTitle);
        
        const projectSample = document.createElement('li');
        projectSample.id = 'project-sample';
        projectSample.textContent = 'Sample Project';
        projectTitle.appendChild(projectSample);

        const newProject = document.createElement('button');
        newProject.id = 'new-project';
        newProject.textContent = 'New Project';
        projectDiv.appendChild(newProject);
    };

    const loadList = (task) => {
        const taskDiv = document.createElement('div');
        taskDiv.id = 'list-div';
        mainHeader.appendChild(taskDiv)

        const taskTitle = document.createElement('h2');
        taskTitle.id = 'task-title';
        taskTitle.textContent = 'Tasks';
        taskDiv.appendChild(taskTitle);
        
        const taskSample = document.createElement('li');
        taskSample.id = 'task-sample';
        taskSample.textContent = 'Sample Task';
        taskTitle.appendChild(taskSample);

        const newTask = document.createElement('button');
        newTask.id = 'new-task';
        newTask.textContent = 'New Task';
        taskDiv.appendChild(newTask);
    };

    const initiatePage = (() => {
        loadHeader();
        loadNav();
        loadList();
    })();
};
export { loadDOM }