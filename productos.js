const buscar = document.getElementById("buscar");
const filas = document.querySelectorAll("tbody tr");
const botonModo = document.getElementById("modoOscuro");

buscar.addEventListener("input", function() {
    const texto = buscar.value.toLowerCase();

    filas.forEach(function(fila) {
        const contenido = fila.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
});

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }
});
