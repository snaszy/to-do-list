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
                priority: 'now',
                checked: true,
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

loadDOM(allProjects, currentTasks());

const submitProject = (project) => {
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].current = false;
    }
    const newProject = createProject(project, true);
    addProjectArray(allProjects, newProject);
    loadDOM(allProjects, currentTasks());
};

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    addTaskArray(currentTasks(), newTask);
    loadDOM(allProjects, currentTasks());
};

const updateDOM = () => {
    loadDOM(allProjects, currentTasks());
};

/* const updateSave = (() => {
    if (localSave.MyList) {
        allProjects = getSave();
    }
})(); */

const save = () => { 
    localSave.setItem('MyList', JSON.stringify(allProjects));
};

const getSave = () => {
    return JSON.parse(localSave.getItem('MyList'));
};

export { 
    submitProject,
    submitTask,
    updateDOM,
    currentTasks,
    currentProject,
};
