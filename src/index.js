import { loadDOM, findProject } from './DOM.js';
import { openForm } from './forms.js';
import { clearProjectList, createProject, updateProjectList, addProjectArray, getProjectTitle, openProject } from './project.js';
import { clearTaskList, createTask, updateTaskList, addTaskArray } from './task.js';
import './style.css';

loadDOM()

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');
const projectSelected = document.querySelectorAll('div#project-list > li');
const newForm = openForm();

let allProjects = [
                    {
                    project: 'Sample Project',
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

newProjectButton.addEventListener('click', () => {
    newForm.projectForm();
});

newTaskButton.addEventListener('click', () => {
    newForm.taskForm();
});

const submitProject = (project) => {
    const newProject = createProject(project);
    const projectList = document.querySelector('#project-list');
    let currentProjectTitle = document.querySelector('.current-project').textContent;
    addProjectArray(allProjects, newProject);
    clearProjectList(projectList);
    updateProjectList(allProjects, currentProjectTitle);
}

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    const taskList = document.querySelector('#task-list');
    //const currentProjectTitle = getProjectTitle();
    addTaskArray(allProjects[0].allTasks, newTask);
    clearTaskList(taskList)
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
