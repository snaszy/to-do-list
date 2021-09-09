import { loadDOM, clearList } from './DOM.js';
import { openForm } from './forms.js';
import { createProject, addProjectArray } from './project.js';
import { createTask, addTaskArray } from './task.js';
import './style.css';

let allProjects = [
    {
    project: 'Sample Project',
    current: true,
    allTasks: [
                {
                name: 'FirstTask',
                details: 'second Task',
                priority: 'now'
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

loadDOM(allProjects, allProjects[0].allTasks);
//console.log(allProjects[0].allTasks);

const submitProject = (project) => {
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].current = false;
    }
    const newProject = createProject(project, true);
    addProjectArray(allProjects, newProject);
    clearList();
    loadDOM(allProjects, currentTasks());
}

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    addTaskArray(currentTasks(), newTask);
    clearList();
    loadDOM(allProjects, currentTasks());
}

function saveStorage () { 
    localStorage.setItem('MyList', JSON.stringify(allProjects));
}

function getStorage (){
    return JSON.parse(localStorage.getItem('MyList'));
}

export { 
    submitProject,
    submitTask,
    currentTasks,
    currentProject,
};
