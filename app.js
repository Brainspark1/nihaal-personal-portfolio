const checkbox = document.getElementById("goofy-checkbox");

const submitButton = document.getElementById("submit-button");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add("goofy-theme");

        console.log("Goofy enabled");
    } else {
        document.body.classList.remove("goofy-theme");

        console.log("Goofy disabled");
    }
}) 

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // stops page from reloading due to submit button

   for (let i = 0; i < 24; i++) {
        confetti({ 
            particleCount: 5, 
            angle: 60, 
            spread: 55, 
            origin: { x: 0 } 
        });
  
        confetti({ 
            particleCount: 5, 
            angle: 120, 
            spread: 55, 
            origin: { x: 1 } 
        });
    }
});
