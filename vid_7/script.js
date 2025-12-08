// Event listener for mouse wheel scrolling
window.addEventListener("wheel", (e) => {
    // Check scroll direction: e.deltaY > 0 means scrolling down
    if (e.deltaY > 0) {
        // Animate the marquee to move left
        gsap.to(".marq", {
            transform: "translateX(-200%)", // Move left indefinitely
            repeat: -1, // Infinite repeat
            duration: 4,
            ease: "none" // Linear movement for smooth marquee
        });

        // Rotate the arrow 180 degrees when moving left
        gsap.to(".marq img", {
            rotate: 180
        });
    }
    else {
        // Scrolling up: reverse direction
        gsap.to(".marq", {
            transform: "translateX(0%)", // Move back towards right
            repeat: -1,
            duration: 4,
            ease: "none"
        });

        // Reset arrow rotation
        gsap.to(".marq img", {
            rotate: 0
        });
    }
});