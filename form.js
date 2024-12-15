document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const pseudoInput = document.getElementById('pseudo');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');
    const dateInput = document.getElementById('date-de-naissance');
    const messageError = document.querySelector('.message-error ul');
    const messageSuccess = document.querySelector('.message-success');
    
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        pseudoInput.value = savedData.pseudo;
        emailInput.value = savedData.email;
        passwordInput.value = savedData.password;
        dateInput.value = savedData.date;
    }

    function validateForm() {
        messageError.innerHTML = '';
        let errors = [];
        
        if (pseudoInput.value.trim() === '') {
            errors.push('Le pseudo est obligatoire');
        }
        if (emailInput.value.trim() === '') {
            errors.push('L\'email est obligatoire');
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            errors.push('Veuillez entrer un email valide');
        }
        if (passwordInput.value.trim() === '') {
            errors.push('Le mot de passe est obligatoire');
        }
        if (password2Input.value.trim() !== passwordInput.value.trim()) {
            errors.push('Les mots de passe ne correspondent pas');
        }
        if (dateInput.value.trim() === '') {
            errors.push('La date de naissance est obligatoire');
        }

        return errors;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach(error => {
                const li = document.createElement('li');
                li.textContent = error;
                messageError.appendChild(li);
            });
            messageError.style.display = 'block';
            messageSuccess.style.display = 'none';
        } else {
            const formData = {
                pseudo: pseudoInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                date: dateInput.value,
            };
            localStorage.setItem('formData', JSON.stringify(formData));

            console.log('Données de l\'utilisateur :', formData);

            messageSuccess.style.display = 'block';
            messageError.style.display = 'none';
            
            form.reset();
        }
    });
});
