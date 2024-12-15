document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const form = document.querySelector("form");

    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        form.classList.toggle("dark-mode");
        darkModeButton.classList.toggle("dark-mode");

        darkModeButton.textContent = body.classList.contains("dark-mode")
            ? "Light Mode"
            : "Dark Mode";
    });
});

