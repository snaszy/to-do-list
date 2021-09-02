import { appendProject } from './DOM.js';

const createProject = (project) => {
    return {
        project,
        allTasks: [],
    };
};

const addProjectArray = (array, project) => {
    array.push(project);
};

const updateProjectList = (array) => {
    for (let i = 0; i < array.length; i++) {
        appendProject(array[i].project);
    }
}

const clearProjectList = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const getProjectTitle = () => {
    const projectTitle = document.querySelector('.current-project');

    return projectTitle.textContent;
}

export { 
    createProject,
    addProjectArray,
    updateProjectList,
    clearProjectList,
    getProjectTitle
};
