gsap.from("#page1 #box",
    {
        scale: 0,
        duration: 1,
        delay: 0.5,
        rotation: 360,
        ease: "power2.out"
    }
)
gsap.from("#page2 #box",
    {
        scale: 0,
        duration: 4,
        rotation: 360,
        ease: "power2.out",
        //* Simple ScrollTrigger
        // scrollTrigger: "#page2 #box"
        //? Special ScrollTrigger
        scrollTrigger: {
            trigger: "#page2 #box",
            scroller: "body",// The element that will be scrolling
            markers: true,// Shows the markers for the scroller like scroller end and start
            start: "top 60%",// When the box will start
            end: "bottom 50%",// When the box will end
            scrub: 1,// Slows down the animation
        }
    }
)

gsap.from("#page3 h1",
    {
        opacity: 0,
        duration: 4,
        x: (i) => i % 2 === 0 ? 100 : -100,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "body",
            markers: true,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
        }

    }
)

// Page 4 Animation: Scaling and Opacity with ScrollTrigger
gsap.from("#page4 #box",
    {
        scale: -4,
        opacity: 0,
        duration: 4,
        scrollTrigger: {
            trigger: "#page4 #box",
            scroller: "body",
            markers: true,
            start: "top 50%",
            end: "bottom 50%",
            // scrub: 1,// we can aslo give it vaule as true of false 
            scrub: 3,// the  more  number you will increase the more slow and SMOOTH it will be 
        }
    }
)

// Page 5 Animation: Horizontal Scroll (Marquee Effect)
gsap.to("#page5 h1", {
    transform: "translate(-140%)", // Moves the h1 to the left
    delay: 4,
    duration: 4,
    scrollTrigger: {
        trigger: "#page5", // Trigger on the parent container
        pin: true, // Pins the container in place while the animation plays
        scroller: "body",
        markers: true,
        start: "top 0%", // Starts when the top of the container hits the top of the viewport
        end: "bottom -100%", // Ends when the user has scrolled past the pinned duration
        scrub: 3, // Smooth scrubbing
    }
})