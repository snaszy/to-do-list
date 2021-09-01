const createTask = (name, details, date, priority) => {
    return {
        name,
        details,
        date,
        priority,
        checked: false,
        id: Date.now().toString(),
    };
};

const addTaskArray = (array, task) => {
    array.push(task);
};

const updateTaskList = (array) => {
    for (let i = 0; i < array.length; i++) {
        appendTask(array[i].name);
    }
}

const clearTaskList = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { 
    createTask,
    addTaskArray, 
    updateTaskList,
    clearTaskList,
};