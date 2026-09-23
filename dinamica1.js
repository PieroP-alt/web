const botones = document.querySelectorAll(".theme-btn");

function cambiarTema(tema) {
    document.body.dataset.theme = tema;
    localStorage.setItem("tema", tema);

    botones.forEach(boton => {
        boton.classList.toggle(
            "active",
            boton.dataset.theme === tema
        );
    });
}

const temaGuardado = localStorage.getItem("tema") || "dark";

cambiarTema(temaGuardado);

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        cambiarTema(boton.dataset.theme);
    });
});