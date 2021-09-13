import Logo from './images/logo.png';
import { openForm, getFormInformation } from './forms';
import { currentProject } from '.';

const newForm = openForm();

const loadDOM = (projects, tasks) => {
    clearDOM();

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

        insertProjects(projects);

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

        insertTasks(projects, tasks)

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

const insertProjects = (projects) => {
    const projectListDiv = document.querySelector('#project-list');

    for (let i = 0; i < projects.length; i++) {
        const projectList = document.createElement('li');
        projectList.textContent = projects[i].project;
        if (projects[i].current) {
            projectList.className = 'current-project';
        }
        else {
            projectList.className = '';
        }
        projectList.addEventListener('click', () => {
            for (let i = 0; i < projects.length; i++) {
                projects[i].current = false;
            }
            projects[i].current = true;
            loadDOM(projects, projects[i].allTasks);
            console.log('clicked');
        })
        projectListDiv.appendChild(projectList);            
    } 
}

const insertTasks = (projects, tasks) => {
    const taskListDiv = document.querySelector('#task-list');

    for (let i = 0; i < tasks.length; i++) {
        const taskElementDiv = document.createElement('div');
        taskElementDiv.className = 'task';
        taskListDiv.appendChild(taskElementDiv);

        const taskCompleted = document.createElement('button');
        taskCompleted.className = 'completed';
        if (tasks[i].checked) {
            taskCompleted.textContent = '-';
        } else {
            taskCompleted.textContent = 'o';
        }
        if (tasks[i].priority === 'Low') {
            taskCompleted.id = 'green';
        } else if (tasks[i].priority === 'Medium') {
            taskCompleted.id = 'blue';
        } else if (tasks[i].priority === 'High') {
            taskCompleted.id = 'red';
        }else {
            taskCompleted.id = 'none';
        }
        taskCompleted.addEventListener('click', () => {
            if (tasks[i].checked) {
                tasks[i].checked = false;
            } else {
                tasks[i].checked = true;
            }
            loadDOM(projects, tasks);
        });
        taskElementDiv.appendChild(taskCompleted);

        const taskList = document.createElement('p');
        taskList.className = 'name';
        taskList.textContent = tasks[i].name;
        taskList.id = tasks[i].id;
        taskList.addEventListener('click', (e) => {
            newForm.editForm(tasks[i]);
            getFormInformation(tasks[i]);
            //getting information from the tasks and pushing to form
        })
        taskElementDiv.appendChild(taskList);
        
        const taskDate = document.createElement('p');
        taskDate.className = 'date';
        taskDate.textContent = tasks[i].date;
        taskElementDiv.appendChild(taskDate);

        const taskRemove = document.createElement('button');
        taskRemove.className = 'remove';
        taskRemove.textContent = 'x';
        taskRemove.addEventListener('click', () => {
            tasks.splice(tasks[i], 1);
            loadDOM(projects, tasks)
        });
        taskElementDiv.appendChild(taskRemove);

        const taskDetails = document.createElement('p');
        taskDetails.className = 'details';
        taskDetails.textContent = tasks[i].details;
        taskElementDiv.appendChild(taskDetails);
    }    
}

const clearDOM = () => {
    const projectList = document.querySelector('#content');
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
}

export { 
    loadDOM,
    clearDOM,
 }