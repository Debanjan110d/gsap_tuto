// Grab key DOM elements
const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");


// Follow the mouse: translate the faux cursor to the pointer coordinates
// Using gsap.to for smooth animation and ease for a springy feel
main.addEventListener("mousemove", (e) => { // e: MouseEvent
    gsap.to(cursor, {
        x: e.x, // move to pointer's X in viewport coordinates
        y: e.y, // move to pointer's Y in viewport coordinates
        ease: "back.out(1.7)",
    });
});

// When hovering the image, enlarge the cursor for visual feedback
image.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 2,
        duration: 0.5,
        ease: "back.out(1.7)",
    });
});

// Restore cursor scale when leaving the image
image.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
    });
});