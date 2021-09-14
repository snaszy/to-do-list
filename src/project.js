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

//find the array of the current project
const indexOfProject = (project) => {
    allProjects.indexOf(project);
}

export { 
    createProject,
    addProjectArray,
    indexOfProject,
};
