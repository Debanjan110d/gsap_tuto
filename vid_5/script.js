gsap.from("#nav", {
    y: -100,
    duration: 1,
    ease: "power3.out"
})

//* Query Selectors

const nav = document.querySelector("#nav");
const side = document.querySelector("#side");
const menu = document.querySelector(".ri-menu-line");
const close = document.querySelector(".ri-close-line");

//? Timeline

const tl = gsap.timeline({});


tl.to("#side", {
    right: 0,
    duration: 1,
    ease: "power3.out"
})

tl.from("#side i", {
    x: -100,
    duration: 0.6,
    ease: "power3.out",
    opacity: 0
})

tl.from("#side li", {
    x: 100,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.3,
    opacity: 0
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
})

close.addEventListener("click", () => {
    tl.reverse();
})

