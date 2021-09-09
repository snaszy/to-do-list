import Logo from './images/logo.png';
import { indexOfProject, updateProjectList  } from './project';
import { openForm } from './forms';

const newForm = openForm();

const loadDOM = (projects, tasks) => {

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

    const loadProjects = (projects) => {

        const projectDiv = document.createElement('div');
        projectDiv.id = 'nav-div';
        mainHeader.appendChild(projectDiv)

        const projectTitle = document.createElement('h1');
        projectTitle.id = 'project-title';
        projectTitle.textContent = 'Projects';
        projectDiv.appendChild(projectTitle);
        
        const projectListDiv = document.createElement('div');
        projectListDiv.id = 'project-list';
        projectDiv.appendChild(projectListDiv);

        for (let i = 0; i < projects.length; i++) {
            const projectList = document.createElement('li');
            projectList.textContent = projects[i].project;
            projectList.addEventListener('click', (e) => {
                const currentProject = projects[i].project;
                clearList();
                loadDOM(projects, currentProject);
            })
            projectListDiv.appendChild(projectList);            
        }    

        projectTitle.addEventListener('click', (e) => {
            const currentProject = projects.project;
            clearList();
            loadDOM(projects, currentProject);
            console.log(projects);
            console.log(currentProject);
        })

        const newProject = document.createElement('button');
        newProject.id = 'new-project';
        newProject.textContent = 'New Project';
        newProject.addEventListener('click', () => {
            newForm.projectForm();
        });
        projectDiv.appendChild(newProject);
    };

    const loadTasks = (tasks) => {
        const taskDiv = document.createElement('div');
        taskDiv.id = 'list-div';
        mainHeader.appendChild(taskDiv)

        const taskTitle = document.createElement('h1');
        taskTitle.id = 'task-title';
        taskTitle.textContent = 'Tasks';
        taskDiv.appendChild(taskTitle);
        
        const taskListDiv = document.createElement('div');
        taskListDiv.id = 'task-list';
        taskDiv.appendChild(taskListDiv);

        const taskSample = document.createElement('li');
        taskSample.id = 'task-sample';
        taskSample.textContent = 'Sample Task';
        taskListDiv.appendChild(taskSample);
    
        const taskList = document.createElement('li');
        taskList.textContent = tasks;
        taskListDiv.appendChild(taskList);

        const newTask = document.createElement('button');
        newTask.id = 'new-task';
        newTask.textContent = 'New Task';
        taskDiv.appendChild(newTask);
    };

    const initiatePage = (() => {
        loadHeader();
        loadProjects(projects);
        loadTasks(tasks);
    })();
};


const appendTaskToDOM = (task) => {
    const taskTitle = document.querySelector('#task-list');
    
    const taskSample = document.createElement('li');
    taskSample.textContent = task;
    taskTitle.appendChild(taskSample);
};

const clearList = () => {
    const projectList = document.querySelector('#content');
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
}

export { 
    loadDOM,
    appendTaskToDOM,
    clearList,
 }