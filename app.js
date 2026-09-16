const checkbox = document.getElementById("goofy-checkbox");

const introParagraph = document.getElementById("intro-paragraph");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add("goofy-theme");

        console.log("Goofy enabled");
    } else {
        document.body.classList.remove("goofy-theme");

        console.log("Goofy disabled");
    }
}) 