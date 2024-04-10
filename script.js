let icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "Componentes/sun.png";
    } else {
        icon.src = "Componentes/moon.png";
    }
}