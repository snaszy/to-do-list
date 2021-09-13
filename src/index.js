import { loadDOM } from './DOM.js';
import { createProject, addProjectArray } from './project.js';
import { createTask, addTaskArray } from './task.js';
import './style.css';

let allProjects = [
    {
    project: 'Sample Project',
    current: true,
    allTasks: [
                {
                name: 'First Task',
                details: 'description of what needs to happen',
                date: '11/12/23',
                priority: 'High',
                checked: false,
                id: 1223455,
                }
            ],
    }
  ];

const currentTasks = () => {
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].current) {
            return allProjects[i].allTasks;
        }
    }
};

const currentProject = () => {
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].current) {
            return allProjects[i].project;
        }
    }
};

const submitProject = (project) => {
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].current = false;
    }
    const newProject = createProject(project, true);
    addProjectArray(allProjects, newProject);
    updateDOM();
};

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    addTaskArray(currentTasks(), newTask);
    updateDOM();
};

const updateDOM = () => {
    saveLocalStorage();
    loadDOM(allProjects, currentTasks());
};

const updateLocalStorage = () => {
    if (localStorage.MyList) {
        allProjects = getLocalStorage();
        return allProjects;
    }
};

const saveLocalStorage = () => { 
    localStorage.setItem('MyList', JSON.stringify(allProjects));
};

const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('MyList'));
};

const checkForStorage = (() => {
    updateLocalStorage();
    updateDOM();
})();


export { 
    submitProject,
    submitTask,
    updateDOM,
    currentTasks,
    currentProject,
};
