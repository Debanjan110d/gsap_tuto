# GSAP Tutorial - Video 4: Custom Cursor & Mouse Follower

## Concepts Learned
1.  **Custom Cursor**: Creating a `div` to act as a custom cursor instead of the default browser pointer.
2.  **Mouse Events**: Using the `mousemove` event listener to track the user's mouse position (`e.x`, `e.y`).
3.  **GSAP Quick Setter (or standard `to`)**: Moving the custom cursor element to the mouse coordinates.
    *   **Note**: In this example, we used `gsap.to` for smooth following.
4.  **CSS Styling**:
    *   `position: fixed`: To ensure the cursor stays relative to the viewport.
    *   `pointer-events: none`: **Crucial** to ensure the custom cursor doesn't block clicks or hover events on elements beneath it.
    *   `z-index`: (Optional but good practice) ensuring the cursor stays on top.
5.  **Easing**: Using `ease: "back.out(1.7)"` to give the cursor movement a slight overshoot or "bouncy" feel.

## Code Snippet

### JavaScript
```javascript
const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5, // Optional: add duration for lag effect
        ease: "back.out(1.7)"
    });
});
```

### CSS Important Bits
```css
#cursor {
    position: fixed;
    pointer-events: none; /* Essential! */
}
#main {
    height: 100%;
    width: 100%;
}
```
