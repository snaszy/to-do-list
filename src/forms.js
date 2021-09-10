import { dateTime} from 'date-fns'; 
import { submitProject, submitTask, updateDOM } from './index.js';

const openForm = () => {
    const mainHeader = document.getElementById('content');

    const projectForm = () => {
        const blackBackground = document.createElement('div');
        blackBackground.className = 'background';
        mainHeader.appendChild(blackBackground);
        
        const projectDiv = document.createElement('div');
        projectDiv.id = 'project-div';
        blackBackground.appendChild(projectDiv);

        const projectTitle = document.createElement('h2');
        projectTitle.id = 'project-title';
        projectTitle.textContent = 'New Project';
        projectDiv.appendChild(projectTitle);

        const projectFormWindow = document.createElement('form');
        projectFormWindow.id = 'project-form';
        projectDiv.appendChild(projectFormWindow);

        const projectNameInput = document.createElement('input');
        projectNameInput.id = 'project-name-input';
        projectNameInput.setAttribute('placeholder','Project Name');
        projectFormWindow.appendChild(projectNameInput);

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
    
        closeProjectButton.querySelector('#close-project-button');
        closeProjectButton.addEventListener('click', () => {
            blackBackground.id = 'no-background';
            updateDOM();
        });

        submitProjectButton.querySelector('#project-submit');
        submitProjectButton.addEventListener('click', () => {
            if (projectNameInput.value !== '') {
            submitProject(projectNameInput.value);
            } else {
                alert('Please Enter a Name');
            }
            blackBackground.id = 'no-background';
        });
    };

    const taskForm = () => {
        const blackBackground = document.createElement('div');
        blackBackground.className = 'background';
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
        taskNameInput.setAttribute('required', '');
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
        taskDateDueInput.type = 'date';
        taskDateDueInput.setAttribute('placeholder','Date');
        taskDateDueLabel.appendChild(taskDateDueInput);

        const taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.id = 'task-priority-label';
        taskPriorityLabel.textContent = 'Priority ';
        taskFormWindow.appendChild(taskPriorityLabel);

        const taskPriorityInput = document.createElement('input');
        taskPriorityInput.id = 'task-priority-input';
        taskPriorityInput.setAttribute('placeholder','Priority');
        taskPriorityLabel.appendChild(taskPriorityInput);

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

        closeTaskButton.querySelector('#close-button');
        closeTaskButton.addEventListener('click', () => {
            blackBackground.id = 'no-background';
            updateDOM();
        });

        submitTaskButton.querySelector('#task-submit');
        submitTaskButton.addEventListener('click', () => {
            if (taskNameInput.value !== '') {
                submitTask(
                    taskNameInput.value, 
                    taskDetailsInput.value, 
                    taskDateDueInput.value, 
                    taskPriorityInput.value
                );
            } else {
                alert('Please Enter a Name');
            }
            blackBackground.id = 'no-background';
        });
    };

    const editForm = (task) => {
        const blackBackground = document.createElement('div');
        blackBackground.className = 'background';
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
        taskDateDueLabel.type = 'date';
        taskDateDueLabel.textContent = 'Date Due ';
        taskFormWindow.appendChild(taskDateDueLabel);

        const taskDateDueInput = document.createElement('input');
        taskDateDueInput.id = 'task-date-input';
        taskDateDueInput.setAttribute('placeholder','Date');
        taskDateDueLabel.appendChild(taskDateDueInput);

        const taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.id = 'task-priority-label';
        taskPriorityLabel.textContent = 'Priority ';
        taskFormWindow.appendChild(taskPriorityLabel);

        const taskPriorityInput = document.createElement('input');
        taskPriorityInput.id = 'task-priority-input';
        taskPriorityInput.setAttribute('placeholder','Priority');
        taskPriorityLabel.appendChild(taskPriorityInput);

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

        closeTaskButton.querySelector('#close-button');
        closeTaskButton.addEventListener('click', () => {
            blackBackground.id = 'no-background';
            updateDOM();
        });

        submitTaskButton.querySelector('#task-submit');
        submitTaskButton.addEventListener('click', () => {
            task.name = taskNameInput.value; 
            task.details = taskDetailsInput.value;
            task.date = taskDateDueInput.value;
            task.priority = taskPriorityInput.value; 
            blackBackground.id = 'no-background';
            updateDOM();
        });
    };

    return {
        taskForm,
        projectForm,
        editForm,
    }
}

const getFormInformation = (tasks) => {
    const name = document.querySelector('#task-name-input');
    const details = document.querySelector('#task-details-input');
    const date = document.querySelector('#task-date-input');
    const priority = document.querySelector('#task-priority-input');
    name.value = tasks.name;
    details.value = tasks.details;
    date.value = tasks.date;
    priority.value = tasks.priority;
}

export { 
    openForm,
    getFormInformation,
 };