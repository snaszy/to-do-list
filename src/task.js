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

export { 
    createTask,
    addTaskArray, 
};