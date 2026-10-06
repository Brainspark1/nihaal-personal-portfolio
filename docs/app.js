const checkbox = document.getElementById("goofy-checkbox");
const contactForm = document.getElementById("contact-form");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        document.body.classList.add("goofy-theme");

        console.log("Goofy enabled");
    } else {
        document.body.classList.remove("goofy-theme");

        console.log("Goofy disabled");
    }
}) 
