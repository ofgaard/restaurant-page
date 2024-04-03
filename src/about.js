export default function about() {
    const aboutCard = document.createElement('div');
    aboutCard.className = 'about-card';

    // Contact Header
    const contactHeader = document.createElement('h1');
    contactHeader.className = 'contact-header';
    contactHeader.textContent = 'Contact';
    aboutCard.appendChild(contactHeader);

    // Contact Information
    const contactInfo = document.createElement('div');
    const address = document.createElement('p');
    address.textContent = 'Poppelgade 3';
    const city = document.createElement('p');
    city.textContent = '2200 Copenhagen';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '1234 5678';
    const email = document.createElement('p');
    email.textContent = 'contact@taglio.dk';

    contactInfo.appendChild(address);
    contactInfo.appendChild(city);
    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(email);
    aboutCard.appendChild(contactInfo);

    // Contact Form
    const contactForm = document.createElement('form');
    contactForm.className = 'contact-form'; // Add contact-form class

    // Name Input
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    contactForm.appendChild(nameInput);

    // Email Input
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    contactForm.appendChild(emailInput);

    // Comment Input
    const commentInput = document.createElement('textarea');
    commentInput.placeholder = 'Comment';
    contactForm.appendChild(commentInput);

    // Send Button
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    contactForm.appendChild(sendButton);

    aboutCard.appendChild(contactForm);

    return aboutCard;
}
