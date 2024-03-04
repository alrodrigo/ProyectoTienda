const checkbox = document.getElementById('check');

// Agrega un event listener para detectar cambios en el checkbox
checkbox.addEventListener('change', function() {
    // Selecciona el elemento <ul> dentro de la navbar-left
    const navbarLeftUl = document.querySelector('.navbar-left ul');

    // Verifica si el checkbox está marcado
    if (checkbox.checked) {
        navbarLeftUl.style.right=0;
        navbarLeftUl.style.left='auto';
    } else {
        
        navbarLeftUl.style.left = ('-100%'); // Esto restaurará el color de fondo por defecto
    }
});