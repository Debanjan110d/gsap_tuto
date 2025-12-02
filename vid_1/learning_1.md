# GSAP Tutorial - Video 1: GSAP Basics & Timelines

This document tracks your progress and understanding of GSAP (GreenSock Animation Platform) based on the code you have written in `vid_1`.

## Chapter 1: Setting Up GSAP

Before animating, you included the GSAP library in your project.
In `index.html`, you added the GSAP CDN link:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" ...></script>
```

This allows you to access the `gsap` object in your `script.js`.

---

## Chapter 2: Basic Animations (`gsap.to` vs `gsap.from`)

You learned the two fundamental methods for creating animations:

### 1. `gsap.to()`
This animates an element **from** its current state **to** the values you define.

**Example from your code (`#box1`):**
```javascript
gsap.to("#box1", {
    x: 1000,          // Move 1000px to the right
    duration: 3,      // Take 3 seconds
    delay: 2,         // Wait 2 seconds before starting
    rotate: 360,      // Rotate 360 degrees
    backgroundColor: "pink", // Change color
    borderRadius: "50%",     // Turn into a circle
    scale: 0.5        // Shrink to half size
})
```

### 2. `gsap.from()`
This animates an element **from** the values you define **to** its current CSS state. It's great for "entrance" animations.

**Example from your code (`#box2`):**
```javascript
gsap.from("#box2", {
    x: 1000,      // Starts 1000px to the right
    duration: 3,  // Moves TO its original position (0) over 3 seconds
    delay: 2
})
```

---

## Chapter 3: Staggering Animations

You used `stagger` to animate multiple elements with the same class or tag one after another, creating a flowing effect.

**Example from your code (`h1` headings):**
```javascript
gsap.from("h1", {
    opacity: 0,
    y: 30,
    duration: 3,
    delay: 2,
    stagger: 0.5 // Each <h1> starts 0.5s after the previous one
})
```
This makes the text reveal elegantly instead of appearing all at once.

---

## Chapter 4: Advanced Properties (Loops & Easing)

You explored properties to make animations infinite and smooth.

**Example from your code (`#box3`):**
```javascript
gsap.to("#box3", {
    x: 1000,
    rotate: 360,
    repeat: -1,      // Infinite repetition
    yoyo: true,      // Go back and forth (like a yoyo)
    ease: "power1.inOut" // Smooth acceleration and deceleration
})
```

*   **`repeat: -1`**: Plays the animation forever.
*   **`yoyo: true`**: Reverses the animation on every other cycle.
*   **`ease`**: Controls the "feel" of the motion (e.g., `power3.out`, `power1.inOut`).

---

## Chapter 5: The Timeline (`gsap.timeline`)

You learned that chaining animations with `delay` calculations is tedious. `gsap.timeline()` solves this by sequencing animations automatically.

**Creating a Timeline:**
```javascript
var tl = gsap.timeline()
```

### 1. Navbar Sequence
You used a timeline to animate the logo and then the menu items.
```javascript
// Step 1: Animate Logo
tl.from("#logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1
})

// Step 2: Animate Menu Items (runs after Logo finishes)
tl.from("li", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.5 // Animate list items one by one
})
```
Because these are on a timeline `tl`, the list items (`li`) wait for the logo animation to finish before they start.

### 2. Box Sequence
You also used a timeline for `#box4` and `#box5`.
```javascript
tl.to("#box4", { x: 1000, duration: 3 })
tl.to("#box5", { x: 1000, duration: 3 }) // Starts exactly when box4 finishes
```
No manual `delay` calculation was needed for `#box5`!

---

## Summary
*   **`gsap.to`**: Current -> New State.
*   **`gsap.from`**: New State -> Current State (Entrance).
*   **`stagger`**: Delays start times for a group of elements.
*   **`timeline`**: Chains animations in a sequence without manual math.
