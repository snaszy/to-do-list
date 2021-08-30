import { createTask } from './task.js';
import { addTask } from './task.js';
import { submitProject } from './index.js';
import { addProject } from './project.js';
import { submitTask } from './index.js';

const openForm = () => {
    const mainHeader = document.getElementById('content');

    const taskForm = (name, description, date) => {
        const blackBackground = document.createElement('div');
        blackBackground.id = 'background';
        blackBackground.classList.add('black-background');
        mainHeader.appendChild(blackBackground);
        
        const taskDiv = document.createElement('div');
        taskDiv.id = 'task-div';
        blackBackground.appendChild(taskDiv);

        const taskTitle = document.createElement('h2');
        taskTitle.id = 'task-title';
        taskTitle.textContent = 'New Task';
        taskDiv.appendChild(taskTitle);

        const taskFormWindow = document.createElement('form');
        taskFormWindow.id = 'task-form';
        taskDiv.appendChild(taskFormWindow);

        const taskNameLabel = document.createElement('label');
        taskNameLabel.id = 'task-name-label';
        taskNameLabel.textContent = 'Name ';
        taskFormWindow.appendChild(taskNameLabel);

        const taskNameInput = document.createElement('input');
        taskNameInput.id = 'task-name-input';
        taskNameInput.setAttribute('placeholder','Task');
        taskNameLabel.appendChild(taskNameInput);

        const taskDetailsLabel = document.createElement('label');
        taskDetailsLabel.id = 'task-details-label';
        taskDetailsLabel.textContent = 'Details ';
        taskFormWindow.appendChild(taskDetailsLabel);

        const taskDetailsInput = document.createElement('input');
        taskDetailsInput.id = 'task-details-input';
        taskDetailsInput.setAttribute('placeholder','Details');
        taskDetailsLabel.appendChild(taskDetailsInput);

        const taskDateDueLabel = document.createElement('label');
        taskDateDueLabel.id = 'task-date-label';
        taskDateDueLabel.textContent = 'Date Due ';
        taskFormWindow.appendChild(taskDateDueLabel);

        const taskDateDueInput = document.createElement('input');
        taskDateDueInput.id = 'task-date-input';
        taskDateDueInput.setAttribute('placeholder','Date');
        taskDateDueLabel.appendChild(taskDateDueInput);

        const buttonDiv = document.createElement('div');
        buttonDiv.id = 'button-container';
        taskFormWindow.appendChild(buttonDiv);

        const submitTaskButton = document.createElement('button');
        submitTaskButton.id = 'task-submit';
        submitTaskButton.type = 'button';
        submitTaskButton.textContent = 'submit';
        buttonDiv.appendChild(submitTaskButton);

        const closeTaskButton = document.createElement('button');
        closeTaskButton.id = 'close-button';
        closeTaskButton.type = 'button';
        closeTaskButton.textContent = 'Close';
        buttonDiv.appendChild(closeTaskButton);

        closeTaskButton.querySelector('#close-button')
        closeTaskButton.addEventListener('click', () => {
            blackBackground.classList.toggle('no-background');
        })

        submitTaskButton.querySelector('#task-submit')
        submitTaskButton.addEventListener('click', () => {
            const name = document.querySelector('#task-name-input');
            const details = document.querySelector('#task-name-details');
            const date = document.querySelector('#task-name-date');
            submitTask(name.value, details.value, date.value );
        })
    };

    const projectForm = (project) => {
        const blackBackground = document.createElement('div');
        blackBackground.id = 'background';
        mainHeader.appendChild(blackBackground);
        
        const projectDiv = document.createElement('div');
        projectDiv.id = 'project-div';
        blackBackground.appendChild(projectDiv);

        const projectTitle = document.createElement('h2');
        projectTitle.id = 'project-title';
        projectTitle.textContent = 'New Property';
        projectDiv.appendChild(projectTitle);

        const projectFormWindow = document.createElement('form');
        projectFormWindow.id = 'project-form';
        projectDiv.appendChild(projectFormWindow);

        const projectNameLabel = document.createElement('label');
        projectNameLabel.id = 'project-name-label';
        projectNameLabel.textContent = 'Name ';
        projectFormWindow.appendChild(projectNameLabel);

        const projectNameInput = document.createElement('input');
        projectNameInput.id = 'project-name-input';
        projectNameInput.setAttribute('placeholder','Property');
        projectNameLabel.appendChild(projectNameInput);

        const projectDetailsLabel = document.createElement('label');
        projectDetailsLabel.id = 'project-details-label';
        projectDetailsLabel.textContent = 'Details ';
        projectFormWindow.appendChild(projectDetailsLabel);

        const projectDetailsInput = document.createElement('input');
        projectDetailsInput.id = 'project-details-input';
        projectDetailsInput.setAttribute('placeholder','Details');
        projectDetailsLabel.appendChild(projectDetailsInput);

        const submitProjectButton = document.createElement('button');
        submitProjectButton.id = 'project-submit';
        submitProjectButton.type = 'button';
        submitProjectButton.textContent = 'Submit';
        projectFormWindow.appendChild(submitProjectButton);

        const closeProjectButton = document.createElement('button');
        closeProjectButton.id = 'close-project-button';
        closeProjectButton.type= 'button';
        closeProjectButton.textContent = 'Close';
        projectFormWindow.appendChild(closeProjectButton);
    
        closeProjectButton.querySelector('#close-project-button')
        closeProjectButton.addEventListener('click', () => {
            blackBackground.classList.toggle('no-background');
        })

        submitProjectButton.querySelector('#project-submit')
        submitProjectButton.addEventListener('click', () => {
            submitProject();
        })
    };

    return {
        taskForm,
        projectForm
    }
}

export { openForm };