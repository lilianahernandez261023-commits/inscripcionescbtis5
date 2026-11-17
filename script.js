// Función para filtrar libros por carreras o nombres en tiempo real
function filtrarLibros() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let secciones = document.getElementsByClassName('seccion-carrera');

    for (let i = 0; i < secciones.length; i++) {
        let items = secciones[i].getElementsByTagName('li');
        let tituloSeccion = secciones[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        let seccionVisible = false;

        for (let j = 0; j < items.length; j++) {
            let textoLibro = items[j].textContent.toLowerCase();
            // Si coincide con el libro o con el nombre de la carrera completa
            if (textoLibro.includes(input) || tituloSeccion.includes(input)) {
                items[j].style.display = "";
                seccionVisible = true;
            } else {
                items[j].style.display = "none";
            }
        }

        // Muestra u oculta la caja completa de la carrera según la búsqueda
        if (seccionVisible || input === "") {
            secciones[i].style.display = "";
        } else {
            secciones[i].style.display = "none";
        }
    }
}

// Función para confirmar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    alert("¡Muchas gracias " + nombre + "! Tu solicitud ha sido registrada correctamente.");
    document.querySelector("form").reset();
}