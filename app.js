const checkbox = document.getElementById("goofy-checkbox");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add("goofy-theme");

        console.log("Goofy enabled")
    } else {
        document.body.classList.remove("goofy-theme");

        console.log("Goofy disabled")
    }
}) 