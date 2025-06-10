const toggleMenu = document.getElementById('menu-toggle');
const itemsMenu = document.getElementById('menu-items');

toggleMenu.addEventListener('click', () => {
    itemsMenu.classList.toggle('active');
});