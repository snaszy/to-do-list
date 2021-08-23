const loadList = () => {
    const mainHeader = document.getElementById('content');

    const listDiv = document.createElement('div');
    listDiv.id = 'list-div';
    mainHeader.appendChild(listDiv)

    const listTitle = document.createElement('h1');
    listTitle.id = 'list-title';
    listTitle.textContent = 'Todays Schedule';
    listDiv.appendChild(listTitle);

    const listObject = document.createElement('h2');
    listObject.id = 'list-object';
    listObject.textContent = 'First Project';
    listDiv.appendChild(listObject);
}

export { loadList }