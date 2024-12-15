document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    const darkMode = localStorage.getItem('darkMode') === 'enabled';

    if (darkMode) {
        body.classList.add('dark-mode');
    }

    darkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

