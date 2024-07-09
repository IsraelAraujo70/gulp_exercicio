document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("click", function() {
            alert(`Você clicou na imagem: ${image.alt}`);
        });
    });
});