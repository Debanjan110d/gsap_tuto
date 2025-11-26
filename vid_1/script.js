gsap.to(
    "#box1",//Have to mention the same name as we write in css 
    {
        x: 1000,//? Move the box 1000px to the right (x axis)
        duration: 3, //* Move the box in 3 seconds
        delay: 2, //* Move the box after 2 seconds
        rotate: 360,//? Rotate the box 360 degrees
        backgroundColor: "pink",
        borderRadius: "50%",//? Make the box round
        scale: 0.5// It will make the box half the size


    }
)
gsap.from(
    "#box2",//Have to mention the same name as we write in css 
    {
        x: 1000,//? Move the box 1000px to the right (x axis)
        duration: 3, //* Move the box in 3 seconds
        delay: 2, //* Move the box after 2 seconds


    }
)



gsap.from(
    "h1",
    {
        opacity: 0,
        // color: "crimson",
        y: 30,
        duration: 3,
        delay: 2,
        stagger: 0.5 // makes wvery one goes one by one after 0.5 seconds
    }
)

gsap.to(
    "#box3",
    {
        x: 1000,
        duration: 3,
        delay: 2,
        rotate: 360,
        repeat: -1,//? It will repeat the animation infinite times
        yoyo: true,//? It will make the box go back and forth
        ease: "power1.inOut"//? It will make the animation smooth
    }

)


// gsap.to(
//     "#box4",
//     {
//         x: 1000,
//         duration: 3,
//         delay: 3,
//         rotate: 360,

//     }
// )

// gsap.to(
//     "#box5",
//     {
//         x: 1000,
//         duration: 3,
//         delay: 4, //* Lets calculate the calculate the durateion of delay of box4 to get the delay of box5 so that it can go after box4
//         rotate: 360,

//     }
// )


//! Timeline

var tl = gsap.timeline() // Just declare the timeline function to the variable

tl.to(
    "#box4",
    {
        x: 1000,
        duration: 3,
        delay: 3,
        rotate: 360,

    }
)

tl.to(
    "#box5",
    {
        x: 1000,
        duration: 3,
        //* We do not have to give any delay as it will go after the previous animation automatically because of timeline
        rotate: 360,

    }
)