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

    const loadNav = () => {
        const projectDiv = document.createElement('div');
        projectDiv.id = 'nav-div';
        mainHeader.appendChild(projectDiv)

        const projectTitle = document.createElement('h1');
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

    const loadList = () => {
        const taskDiv = document.createElement('div');
        taskDiv.id = 'list-div';
        mainHeader.appendChild(taskDiv)

        const taskTitle = document.createElement('h1');
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

const loadProject = (project) => {
    const projectTitle = document.querySelector('#project-title');
    
    const projectSample = document.createElement('li');
    projectSample.textContent = project;
    projectTitle.appendChild(projectSample);
};

const loadTask = (task) => {
    const taskTitle = document.querySelector('#task-title');
    
    const taskSample = document.createElement('li');
    taskSample.textContent = task.name;
    taskTitle.appendChild(taskSample);
};

export { 
    loadDOM,
    loadProject,
    loadTask
 }