# GSAP Learning Journey - Chapter 2

This document tracks your progress and understanding of GSAP ScrollTrigger based on the code you have written in `vid_2`.

## Chapter 1: Introduction to ScrollTrigger

In this session, you learned how to trigger animations based on the scroll position using the `ScrollTrigger` plugin.

### Setup
You included the ScrollTrigger library alongside GSAP:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" ...></script>
```

---

## Chapter 2: Basic ScrollTrigger

The simplest way to use ScrollTrigger is to assign a selector string to the `scrollTrigger` property within a tween.

**Example:**
```javascript
gsap.from("#page2 #box", {
    scale: 0,
    duration: 1,
    // scrollTrigger: "#page2 #box" // Basic usage
})
```
This tells GSAP to start the animation when `#page2 #box` enters the viewport.

---

## Chapter 3: Advanced ScrollTrigger Configuration

For more control, you passed an object to `scrollTrigger`.

**Key Properties:**
*   **`trigger`**: The element that triggers the animation (e.g., `"#page2 #box"`).
*   **`scroller`**: The viewport or element being scrolled (usually `"body"`).
*   **`markers`**: `true` adds visual markers (start/end) for debugging.
*   **`start`**: When the animation should start (e.g., `"top 60%"` means "when the top of the trigger hits 60% down the viewport").
*   **`end`**: When the animation should end (e.g., `"bottom 50%"`).
*   **`scrub`**: Links the animation progress directly to the scrollbar.
    *   `true`: Locked to scroll.
    *   `1` (or any number): Adds a 1-second smoothing effect (lag) for a fluid feel.

**Example from your code (`#page2 #box`):**
```javascript
scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "bottom 50%",
    scrub: 1
}
```

---

## Chapter 4: Function-Based Values & Alternating Animations

You implemented a cool effect where `h1` elements slide in from opposite directions.

**The Logic:**
Instead of a fixed value for `x`, you used a function:
```javascript
x: (i) => i % 2 === 0 ? 100 : -100
```
*   **`i`**: The index of the target element (0, 1, 2...).
*   **`i % 2 === 0`**: Checks if the index is even.
*   **Result**:
    *   Even index (0, 2...): `x: 100` (Slides from Right)
    *   Odd index (1, 3...): `x: -100` (Slides from Left)

**Full Implementation (`#page3 h1`):**
```javascript
gsap.from("#page3 h1", {
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
        scrub: 1
    }
})
```

---

## Summary
*   **`ScrollTrigger`**: Triggers animations on scroll.
*   **`markers`**: Essential for debugging start/end points.
*   **`scrub`**: Syncs animation playback with scroll position.
*   **Function-based values**: allow dynamic properties based on index.
