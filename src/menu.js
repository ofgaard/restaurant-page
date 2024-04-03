export default function menu() {
    const menuCard = document.createElement('div');
    menuCard.className = 'menu-card';

    const menuHeader = document.createElement('h3');
    menuHeader.className = 'menu-header';
    menuHeader.textContent = 'Menu'; 

    const menuItems = document.createElement('ul');
    menuItems.className = 'menu-list';

    const menuItemOne = document.createElement('li');
    menuItemOne.className = 'menu-item';
    menuItemOne.innerHTML = '<i class="fa-solid fa-mug-hot"></i> Espresso 35,-'; 
    const menuItemOneDescription = document.createElement('p');
    menuItemOneDescription.textContent = 'Double shot. Ask barista for current bean';
    menuItemOne.appendChild(menuItemOneDescription);

    const menuItemTwo = document.createElement('li');
    menuItemTwo.className = 'menu-item';
    menuItemTwo.innerHTML = '<i class="fa-solid fa-mug-hot"></i> Flat White 40,-';
    const menuItemTwoDescription = document.createElement('p');
    menuItemTwoDescription.textContent = 'Add oat milk: 5,-';
    menuItemTwo.appendChild(menuItemTwoDescription);

    const menuItemThree = document.createElement('li');
    menuItemThree.className = 'menu-item';
    menuItemThree.innerHTML = '<i class="fa-solid fa-mug-hot"></i> Cappuccino 40,-'; 
    const menuItemThreeDescription = document.createElement('p');
    menuItemThreeDescription.textContent = 'Add oat milk: 5,-';
    menuItemThree.appendChild(menuItemThreeDescription);

    const menuItemFour = document.createElement('li');
    menuItemFour.className = 'menu-item';
    menuItemFour.innerHTML = '<i class="fa-solid fa-mug-hot"></i> Filter 30,-'; 
    const menuItemFourDescription = document.createElement('p');
    menuItemFourDescription.textContent = 'Ask barista for current bean';
    menuItemFour.appendChild(menuItemFourDescription);

    menuItems.appendChild(menuItemOne);
    menuItems.appendChild(menuItemTwo);
    menuItems.appendChild(menuItemThree);
    menuItems.appendChild(menuItemFour);

    menuCard.appendChild(menuHeader);
    menuCard.appendChild(menuItems);

    return menuCard;
}
