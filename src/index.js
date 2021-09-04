import { loadDOM, findProject } from './DOM.js';
import { openForm } from './forms.js';
import { clearProjectList, createProject, updateProjectList, addProjectArray, getProjectTitle } from './project.js';
import { clearTaskList, createTask, updateTaskList, addTaskArray } from './task.js';
import './style.css';

loadDOM()

const newProjectButton = document.querySelector('#new-project');
const newTaskButton = document.querySelector('#new-task');
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
                            ]
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
    addProjectArray(allProjects[0].allTasks, newProject);
    clearProjectList(projectList);
    updateProjectList(allProjects);
    console.log(allProjects);
}

const submitTask = (name, details, date, priority) => {
    const newTask = createTask(name, details, date, priority);
    const taskList = document.querySelector('#task-list');
    const currentProjectTitle = getProjectTitle();
    addTaskArray(allProjects[0].allTasks, newTask);
    clearTaskList(taskList)
    updateTaskList(allProjects[0].allTasks);
    console.log(allProjects);
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
