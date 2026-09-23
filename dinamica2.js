// Esperar a que cargue todo el documento HTML
document.addEventListener("DOMContentLoaded", () => {

    // 1. Saludo interactivo en la consola y alerta de bienvenida discreta
    console.log("Sitio web cargado correctamente por Piero Pumahuacre.");

    // 2. Interactividad en el menú de navegación (al hacer clic en los elementos del menú)
    const opcionesMenu = document.querySelectorAll("nav ul li");
    
    opcionesMenu.forEach((item) => {
        item.addEventListener("click", () => {
            // Obtener el texto del menú seleccionado
            const nombreSeccion = item.textContent;
            
            // Mostrar una pequeña notificación visual temporal en pantalla o alertar
            alert(`Has seleccionado la sección: ${nombreSeccion}. ¡Explora la información abajo!`);
        });
    });

    // 3. Efecto interactivo para las imágenes de la galería (en el bloque de Galería de fotos)
    // Buscamos las imágenes dentro del nieto3 que actúa como galería
    const imagenesGaleria = document.querySelectorAll(".nieto3 img");

    imagenesGaleria.forEach((img) => {
        img.addEventListener("click", () => {
            // Efecto simple de alternar un borde brillante al hacerle clic
            if (img.style.border === "3px solid #00d2ff") {
                img.style.border = "none";
                img.style.transform = "scale(1)";
            } else {
                // Limpiamos de otras imágenes y aplicamos a la seleccionada
                imagenesGaleria.forEach(i => {
                    i.style.border = "none";
                    i.style.transform = "scale(1)";
                });
                img.style.border = "3px solid #00d2ff";
                img.style.transform = "scale(1.03)";
                img.style.transition = "transform 0.3s ease";
            }
        });
    });

    // 4. Agregar un efecto dinámico en el Footer con la fecha actual
    const footer = document.querySelector(".pie");
    if (footer) {
        const anioActual = new Date().getFullYear();
        footer.innerHTML += ` | Año: ${anioActual}`;
    }
});