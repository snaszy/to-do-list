import { appendProjectToDOM } from './DOM.js';

const createProject = (project, current) => {
    return {
        project,
        current,
        allTasks: [],
    };
};

const addProjectArray = (array, project) => {
    array.push(project);
};

const updateProjectList = (array, currentProject) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].project === currentProject) {
            array[i].current = true;
            appendProjectToDOM(array[i].project);
        } else {
            array[i].current = false;
            appendProjectToDOM(array[i].project);
        }
    }
}

//find the array of the current project
const indexOfProject = (project) => {
    allProjects.indexOf(project);
}

export { 
    createProject,
    addProjectArray,
    updateProjectList,
    indexOfProject,
};
