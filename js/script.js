let icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "components/logow.png";
    } else {
        icon.src = "components/logob.png";
    }
}
