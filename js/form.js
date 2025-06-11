const contactForm = document.getElementById('contact-form');

function validateEmail(email) {
    // o email deve conter @ e .
    return email.includes('@') && email.includes('.');
}

function showMessageError(input, message) {
    input.classList.add('error');
    let messageError = input.nextElementSibling;

    if (!messageError || !messageError.classList.contains('error-message')) {
        messageError = document.createElement('small');
        messageError.classList.add('error-message');
        input.parentNode.insertBefore(messageError, input.nextSibling);
    }

    messageError.textContent = message;
    messageError.style.color = 'red';
}

function hideMessageError(input) {
    input.classList.remove('error');
    let messageError = input.nextElementSibling;

    if(messageError && messageError.classList.contains('error-message')) {
        messageError.textContent = '';
    }
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fieldName = document.getElementById('name');
    const fieldEmail = document.getElementById('email');
    const fieldSubject = document.getElementById('subject');
    const fieldMessage = document.getElementById('message');

    const name = fieldName.value.trim();
    const email = fieldEmail.value.trim();
    const subject = fieldSubject.value.trim();
    const message = fieldMessage.value.trim();

    let isValid = true;

    hideMessageError(fieldName);
    hideMessageError(fieldEmail);
    hideMessageError(fieldSubject);
    hideMessageError(fieldMessage);

    if (name == '') {
        showMessageError(fieldName, 'O campo nome é obrigatório.');
        isValid = false;
    }

    if (email == '') {
        showMessageError(fieldEmail, 'O campo email é obrigatório.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showMessageError(fieldEmail, 'Insira um email válido.');
        isValid = false;
    }

    if (subject == '') {
        showMessageError(fieldSubject, 'O campo assunto é obrigatório.');
        isValid = false;
    }

    if (message == '') {
        showMessageError(fieldMessage, 'O campo mensagem é obrigatório.');
        isValid = false;
    } else if (message.length < 10) {
        showMessageError(fieldMessage, 'A mensagem deve ter pelo menos 10 caracteres.');
        isValid = false;
    }

    if (!isValid) return;

    alert('Mensagem enviada com sucesso! Aguarde respostas no email escrito.');
    contactForm.reset();
});