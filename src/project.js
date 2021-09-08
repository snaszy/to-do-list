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

const updateProjectList = (array, currentProject) => {
    for (let i = 0; i < array.length; i++) {
        if (currentProject === array[i].project) {
            appendProject(array[i].project, 'current-project')

        } else {
            appendProject(array[i].project, '');
        }
    }
}

const clearProjectList = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const setCurrentProject = (project) => {
    project.target.classList('current-project');
}



export { 
    createProject,
    addProjectArray,
    updateProjectList,
    clearProjectList,
    setCurrentProject,
};
