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

export { loadHeader }