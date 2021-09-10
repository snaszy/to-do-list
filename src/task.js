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

const updateTaskArray = (array, tasks) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const removeTaskArray= (array, tasks) => {
    array.splice(array.indexOf(tasks),1);
}

export { 
    createTask,
    addTaskArray,
    updateTaskArray,
};