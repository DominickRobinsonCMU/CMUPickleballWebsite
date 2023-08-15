// Get all carousel elements
const carousels = document.querySelectorAll(".carousel");

// Loop through each carousel
carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    // Get arrow buttons
    const prevButton = carousel.querySelector(".prev-arrow");
    const nextButton = carousel.querySelector(".next-arrow");

    // Hide previous button initially
    prevButton.style.display = "none";

    // Add click event listener to previous button
    prevButton.addEventListener("click", () => {
        images[currentIndex].style.transform = "translateX(100%)";
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.transform = "translateX(0)";
        updateButtons();
    });

    // Add click event listener to next button
    nextButton.addEventListener("click", () => {
        images[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.transform = "translateX(0)";
        updateButtons();
    });

    // Function to update button visibility
    function updateButtons() {
        if (currentIndex === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        if (currentIndex === images.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    }
});
