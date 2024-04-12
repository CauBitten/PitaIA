let icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "components/logow.png";

        for (let i = 0; i < 6; i++) {
            let gitIcon = document.getElementById("git_icon" + i);

            gitIcon.src = "components/githubw.png"
        }

    } else {
        icon.src = "components/logob.png";

        for (let i = 0; i < 6; i++) {
            let gitIcon = document.getElementById("git_icon" + i);

            gitIcon.src = "components/githubb.png"
        }
    }
}
