document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.borderColor = "red";
        });

        image.addEventListener("mouseout", function() {
            image.style.borderColor = "";
        });
    });
});