document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');
    const mainPages = document.querySelectorAll('.main-page');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function () {
            const query = searchInput.value.trim();

            if (query) {
                alert(`You searched for: ${query}`);
            } else {
                alert("Please enter a valid search term.");
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if (searchButton) searchButton.click();
            }
        });
    }

    if (mainPages.length > 0) {
        showPage(mainPages[0].id);
    }
});
