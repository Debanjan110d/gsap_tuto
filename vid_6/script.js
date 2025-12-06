function brokenText() {
    const main = document.querySelector("main");
    const h1 = document.querySelector("h1");

    // Get the raw text content of the h1 element
    const h1_text = h1.textContent;

    // Split the text into an array of individual characters
    const h1_splited_text = h1_text.split("");

    let connected_text = "";

    // Iterate over each character and wrap it in a span tag
    h1_splited_text.forEach((e) => {
        // Create a span for each character to allow individual animation
        connected_text += `<span>${e}</span>`;
    });

    // Replace the original text with the new HTML string containing spans
    h1.innerHTML = connected_text;
}

brokenText();

// Animate the spans using GSAP
gsap.from("h1 span", {
    duration: 1,
    y: 100, // Start 100px below their final position
    opacity: 0, // Start invisible
    ease: "power3.out", // Smooth easing function
    stagger: 0.05 // Delay the start of each animation by 0.05s
});