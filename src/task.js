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

const addTask = (array, task) => {
    array.push(task);
}
export { 
    createTask,
    addTask 
};