let slideIndices = {};

function moveSlide(carouselId, n) {
    if (!slideIndices[carouselId]) {
        slideIndices[carouselId] = 1;
    }
    showSlides(carouselId, slideIndices[carouselId] += n);
}

function showSlides(carouselId, n) {
    let i;
    let carousel = document.getElementById(carouselId);
    let slides = carousel.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");

    if (n > slides.length) { slideIndices[carouselId] = 1; }
    if (n < 1) { slideIndices[carouselId] = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndices[carouselId] - 1].style.display = "block";
}

// Initialize each carousel
document.querySelectorAll('.carousel').forEach(function (carousel) {
    let id = carousel.getAttribute('id');
    showSlides(id, 1);
});
