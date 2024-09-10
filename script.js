// script.js
// Ejemplo: Mostrar y ocultar una sección al hacer clic en un botón
const button = document.getElementById('showMore');
const hiddenContent = document.getElementById('hiddenContent');

button.addEventListener('click', () => {
    hiddenContent.classList.toggle('show');
});