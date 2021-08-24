const openForm = () => {
    const mainHeader = document.getElementById('content');

    const openTask = () => {
        const taskForm = document.createElement('div');
        taskForm.id = 'task-form';
        mainHeader.appendChild(taskForm);
    }
}