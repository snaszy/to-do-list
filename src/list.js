const loadList = () => {
    const mainHeader = document.getElementById('content');

    const listDiv = document.createElement('div');
    listDiv.id = 'list-div';
    mainHeader.appendChild(listDiv)

    const listTitle = document.createElement('h1');
    listTitle.id = 'list-title';
    listTitle.textContent = 'Todays Schedule';
    listDiv.appendChild(listTitle);
}

export { loadList }