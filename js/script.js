let icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "components/sun.png";
    } else {
        icon.src = "components/moon.png";
    }
}
