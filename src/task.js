const createTask = (name, description, date, priority) => {
    return {
        name,
        description,
        date,
        priority,
        checked: false,
        id: Date.now().toString(),
    };
};

const addTask = (array, task) => {
    array.push(task);
}
export { createTask };
export { addTask };