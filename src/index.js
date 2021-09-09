import { loadDOM, clearList } from './DOM.js';
import { openForm } from './forms.js';
import { createProject, updateProjectList, addProjectArray } from './project.js';
import { createTask, updateTaskList, addTaskArray } from './task.js';
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
// console.log(allProjects[0].project)

loadDOM(allProjects, allProjects[0].allTasks[0].name);
console.log(allProjects[0].allTasks[0].name);
console.log(allProjects[0].project);

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');
const newForm = openForm();

newProjectButton.addEventListener('click', () => {
    newForm.projectForm();
});

newTaskButton.addEventListener('click', () => {
    newForm.taskForm();
});

const submitProject = (project) => {
    const newProject = createProject(project, false);
    const projectList = document.querySelector('#content');
    const currentProject = newProject.project;
    addProjectArray(allProjects, newProject);
    clearList();
    loadDOM(allProjects, currentProject);
}

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    const taskList = document.querySelector('#task-list');
    addTaskArray(allProjects[0].allTasks, newTask);
    clearList(taskList)
    updateTaskList(allProjects[0].allTasks);
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
};
