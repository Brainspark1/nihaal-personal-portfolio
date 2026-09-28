const checkbox = document.getElementById("goofy-checkbox");
const contactForm = document.getElementById("contact-form");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add("goofy-theme");

        console.log("Goofy enabled");
    } else {
        document.body.classList.remove("goofy-theme");

        console.log("Goofy disabled");
    }
}) 

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    for (let i = 0; i < 24; i++) {
        confetti({ 
            particleCount: 8, 
            angle: 60, 
            spread: 55, 
            origin: { x: 0 } 
        });
  
        confetti({ 
            particleCount: 8, 
            angle: 120, 
            spread: 55, 
            origin: { x: 1 } 
        });
    }

    contactForm.reset();
})