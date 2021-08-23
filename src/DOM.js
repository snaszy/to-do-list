const loadNav = () => {

    const mainHeader = document.getElementById('content');

    const navDiv = document.createElement('div');
    navDiv.id = 'nav-div';
    mainHeader.appendChild(navDiv)

    const newButton = document.createElement('button');
    newButton.id = 'new-button';
    newButton.textContent = 'New';
    navDiv.appendChild(newButton);
}

export { loadNav };

const loadHeader = () => {

    const mainHeader = document.getElementById('content');

    const headerDiv = document.createElement('div');
    headerDiv.id = 'header-div';
    mainHeader.appendChild(headerDiv)

    const headerLogo = document.createElement('img');
    headerLogo.id = 'header-logo';
    headerLogo.src = './logo.png';
    headerDiv.appendChild(headerLogo);
}

export { loadHeader };

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

export { loadList };