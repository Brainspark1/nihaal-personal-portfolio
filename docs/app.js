// getting the checkbox element from each of the html documents/pages
const checkbox = document.getElementById("goofy-checkbox");

// adding the ability to detect a change in state of the checkbox (checked or not) and then do something
checkbox.addEventListener("change", function() {

    // if the checkbox was checked from not being checked 
    if (checkbox.checked) 
    {
        // add to every body element (each page) the class of goofy-theme, handled in css to change what happens to each element
        document.body.classList.add("goofy-theme");

        // letting programmers know that goofy mode was successfully enabled
        console.log("Goofy mode enabled");
    } 
    // if the checkbox was unchecked from being checked 
    else 
    {
        // remove from every body element (each page) the class of goofy-theme, handled in css to change what happens to each element
        document.body.classList.remove("goofy-theme");

        // letting programmers know that goofy mode was successfully disabled
        console.log("Goofy mode disabled");
    }
}) 
