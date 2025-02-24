document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".about-me__image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            images.forEach(img => img.classList.remove("active"));
            
            image.classList.add("active");
        });
    });
});
