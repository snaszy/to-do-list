const loadNav = () => {

    const mainHeader = document.getElementById('content');

    const navDiv = document.createElement('div');
    navDiv.id = 'nav-div';
    mainHeader.appendChild(navDiv)

    const newButton = document.createElement('button');
    newButton.id = 'new-button';
    navDiv.appendChild(newButton);
}

export { loadNav }