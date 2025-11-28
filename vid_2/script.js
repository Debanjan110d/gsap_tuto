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