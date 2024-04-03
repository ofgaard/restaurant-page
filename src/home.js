export default function home() {
    const welcomeMsg = document.createElement('div');
    const ctoButton = document.createElement('button');

    ctoButton.className = 'cto-button';
    welcomeMsg.className = 'hero';

    welcomeMsg.textContent = "Copenhagen's #1 spot for speciality coffee";
    ctoButton.textContent = 'Find Locations';

    const container = document.createElement('div');
    container.className = 'homepage';
    container.appendChild(welcomeMsg);
    container.appendChild(ctoButton);

    return container;

};