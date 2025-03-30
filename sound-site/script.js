document.querySelectorAll(".hover-image").forEach(image => {
    let sound = new Audio(image.getAttribute("data-sound"));

    image.addEventListener("mouseenter", () => {
        sound.currentTime = 0;  // Reset sound to start
        sound.play();
    });

    image.addEventListener("mouseleave", () => {
        sound.pause();
    });
});
