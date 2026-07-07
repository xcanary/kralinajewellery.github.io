document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".prdPage");
    if (!container) return;

    const slides = container.querySelectorAll(".slide");
    if (!slides.length) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000);
});