document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.jojo-menu .menu > ul > li');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('visible');
            }
        });

        item.addEventListener('mouseleave', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('visible');
            }
        });
    });
});


