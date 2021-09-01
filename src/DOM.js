import Logo from './images/logo.png';

const loadDOM = () => {
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

    const loadProjects = () => {
        const projectDiv = document.createElement('div');
        projectDiv.id = 'nav-div';
        mainHeader.appendChild(projectDiv)

        const projectTitle = document.createElement('h1');
        projectTitle.id = 'project-title';
        projectTitle.textContent = 'Projects';
        projectDiv.appendChild(projectTitle);
        
        const projectList = document.createElement('div');
        projectList.id = 'project-list';
        projectDiv.appendChild(projectList);
        
        const projectSample = document.createElement('li');
        projectSample.id = 'project-sample';
        projectSample.textContent = 'Sample Project';
        projectList.appendChild(projectSample);

        const newProject = document.createElement('button');
        newProject.id = 'new-project';
        newProject.textContent = 'New Project';
        projectDiv.appendChild(newProject);
    };

    const loadTasks = () => {
        const taskDiv = document.createElement('div');
        taskDiv.id = 'list-div';
        mainHeader.appendChild(taskDiv)

        const taskTitle = document.createElement('h1');
        taskTitle.id = 'task-title';
        taskTitle.textContent = 'Tasks';
        taskDiv.appendChild(taskTitle);
        
        const taskList = document.createElement('div');
        taskList.id = 'task-list';
        taskDiv.appendChild(taskList);

        const taskSample = document.createElement('li');
        taskSample.id = 'task-sample';
        taskSample.textContent = 'Sample Task';
        taskList.appendChild(taskSample);

        const newTask = document.createElement('button');
        newTask.id = 'new-task';
        newTask.textContent = 'New Task';
        taskDiv.appendChild(newTask);
    };

    const initiatePage = (() => {
        loadHeader();
        loadProjects();
        loadTasks();
    })();
};

const appendProject = (project) => {
    const projectTitle = document.querySelector('#project-list');
    
    const projectSample = document.createElement('li');
    projectSample.textContent = project;
    projectTitle.appendChild(projectSample);
};

const appendTask = (task) => {
    const taskTitle = document.querySelector('#task-list');
    
    const taskSample = document.createElement('li');
    taskSample.textContent = task;
    taskTitle.appendChild(taskSample);
};

export { 
    loadDOM,
    appendProject,
    appendTask,
 }