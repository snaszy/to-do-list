import { appendTask } from './DOM.js';

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
    // const currentTasks = array.filter(tasks => tasks.name)
    //console.log(currentTasks);
    //appendTask(currentTasks);
    for (let i=0; i < array.length; i++) {
        appendTask(array[i].name); 
        //console.log(array[i].allTasks[0].name);
        //console.log (array[i].allTasks.forEach(name));
        //for (let j = 0; j < array[i].length; j++) {
        //    appendTask(array[i][j]);
        }
    //}
}

const clearTaskList = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const addProjecToArray = () => {

}

export { 
    createTask,
    addTaskArray, 
    updateTaskList,
    clearTaskList,
};