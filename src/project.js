const createProject = (name) => {
    return {
        name,
        tasks: [],
    }
}

const addProject = (array, project) => {
    array.push(project);
}

export { createProject, addProject };
