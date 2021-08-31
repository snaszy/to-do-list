const createProject = (project) => {
    return {
        project,
        allTasks: [],
    }
}

const addProjectArray = (array, project) => {
    array.push(project);
}

export { 
    createProject,
    addProjectArray,
};
