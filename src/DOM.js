import Logo from './images/logo.png';
import { openForm } from './forms';
import { currentProject } from '.';

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
            if (projects[i].current) {
                projectList.className = 'current-project';
            }
            else {
                projectList.className = '';
            }
            projectList.addEventListener('click', (e) => {
                for (let i = 0; i < projects.length; i++) {
                    projects[i].current = false;
                }
                projects[i].current = true;
                clearList();
                loadDOM(projects, projects[i].allTasks);
                console.log('clicked');
            })
            projectListDiv.appendChild(projectList);            
        }    

        const newProject = document.createElement('button');
        newProject.id = 'new-project';
        newProject.textContent = 'New Project';
        newProject.addEventListener('click', () => {
            newForm.projectForm();
        });
        projectDiv.appendChild(newProject);
    };

    const loadTasks = (projects, tasks) => {
        const taskDiv = document.createElement('div');
        taskDiv.id = 'list-div';
        mainHeader.appendChild(taskDiv)

        const taskTitle = document.createElement('h1');
        taskTitle.id = 'task-title';
        taskTitle.textContent = currentProject();
        taskDiv.appendChild(taskTitle);
        
        const taskListDiv = document.createElement('div');
        taskListDiv.id = 'task-list';
        taskDiv.appendChild(taskListDiv);

        for (let i = 0; i < tasks.length; i++) {
            const taskList = document.createElement('li');
            taskList.textContent = tasks[i].name;
            taskList.addEventListener('click', (e) => {
                newForm.taskForm();
                console.log('clicked');
            })
            taskListDiv.appendChild(taskList);   
        }    

        const newTask = document.createElement('button');
        newTask.id = 'new-task';
        newTask.textContent = 'New Task';
        newTask.addEventListener('click', () => {
            newForm.taskForm();
        });
        taskDiv.appendChild(newTask);
    };

    const initiatePage = (() => {
        loadHeader();
        loadProjects(projects);
        loadTasks(projects, tasks);
    })();
};

const clearList = () => {
    const projectList = document.querySelector('#content');
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
}

export { 
    loadDOM,
    clearList,
 }