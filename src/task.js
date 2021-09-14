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

const sortTaskArray = (array) => {
    array.sort((a, b) => (a.date > b.date) ? 1 : (b.date > a.date) ? -1 : 0);
};

export { 
    createTask,
    addTaskArray,
    sortTaskArray,
};