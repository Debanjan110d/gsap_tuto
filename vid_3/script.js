var initialPath = "M 10 100 Q 500 10 990 100";

var finalPath = "M 10 100 Q 500 190 990 100";


var string = document.querySelector("#string")


// Add event listener for mouse movement over the string container
string.addEventListener("mousemove", function (dets) {
    // Get the bounding rectangle of the container to calculate relative coordinates
    // This fixes the issue where the string wouldn't follow correctly if the container wasn't at the top-left of the page
    var rect = string.getBoundingClientRect();

    // Calculate x and y relative to the container
    var relativeX = dets.clientX - rect.left;
    var relativeY = dets.clientY - rect.top;

    // Update the path string with the new control point coordinates
    // M 10 100: Start point
    // Q ${relativeX} ${relativeY}: Quadratic Bezier curve control point (follows mouse)
    // 990 100: End point
    path = `M 10 100 Q ${relativeX} ${relativeY} 990 100`;

    // Animate the path using GSAP
    gsap.to("svg path", {
        attr: { d: path }, // Update the 'd' attribute of the path
        duration: 0.3,     // Short duration for responsive follow
        ease: "power3.out" // Smooth easing
    })
})

// Add event listener for when the mouse leaves the container
string.addEventListener("mouseleave", function () {
    // Animate back to the initial straight/curved line
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 1.5,             // Longer duration for the wobble effect
        ease: "elastic.out(1, 0.2)" // Elastic ease for the bounce/wobble
    })
})


