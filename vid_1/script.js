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