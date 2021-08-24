const getProjects = () => {
    

    const loadHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.id = 'header-div';
        mainHeader.appendChild(headerDiv)

        const headerLogo = document.createElement('img');
        headerLogo.id = 'header-logo';
        headerLogo.src = './logo.png';
        headerDiv.appendChild(headerLogo);
    };
};
const getToDo = (name, description, date, priority) => {
    const mainHeader = document.getElementById('content');

    const loadHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.id = 'header-div';
        mainHeader.appendChild(headerDiv)

        const headerLogo = document.createElement('img');
        headerLogo.id = 'header-logo';
        headerLogo.src = './logo.png';
        headerDiv.appendChild(headerLogo);
    };
};