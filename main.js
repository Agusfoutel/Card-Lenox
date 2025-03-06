function toggleFavorito(element) {
element.classList.toggle('active');
            
            // Cambia entre el icono regular y solid
            const icon = element.querySelector('.bookmark-icon');
            if (element.classList.contains('active')) {
                icon.classList.remove('fa-regular', 'fa-bookmark');
                icon.classList.add('fa-solid', 'fa-bookmark');
            } else {
                icon.classList.remove('fa-solid', 'fa-bookmark');
                icon.classList.add('fa-regular', 'fa-bookmark');
            }
        }



// Obtener elementos del DOM
var modal = document.getElementById("modal");
var button = document.getElementById("openModalBtn");
var closeButton = document.querySelector(".close-button");
var applyButton = document.querySelector(".btn-apply");

// Abrir modal al hacer clic en el botón
button.onclick = function() {
    modal.style.display = "flex"; //flex en lugar de block
    document.body.style.overflow = "hidden"; // Prevenir scroll
}


// Cerrar modal al hacer clic en la X
closeButton.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
}

// Cerrar modal al hacer clic en el botón Aplicar
applyButton.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaurar scroll
    }
}
