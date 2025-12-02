const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");


main.addEventListener("mousemove", (e) => {//* e is the event object    
    gsap.to(cursor, {
        x: e.x, // This will move the cursor to the x position of the mouse
        y: e.y, // This will move the cursor to the y position of the mouse     
        ease: "back.out(1.7)",

    });
});

