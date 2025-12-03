# GSAP Tutorial - Video 4: Custom Cursor & Mouse Follower

## Concepts Learned
1. **Custom Cursor**: Use a simple `div` (`#cursor`) as a faux cursor.
2. **Mouse Events**: Listen for `mousemove` on a full-viewport container (`#main`).
3. **GSAP Animation**: `gsap.to` updates `x`/`y` to follow the pointer with easing.
4. **Hover Feedback**: On `#image` hover, scale the cursor for visual feedback.
5. **Key CSS**:
   - `position: fixed`: Keeps the cursor anchored to the viewport.
   - `pointer-events: none`: Prevents the cursor element from blocking interactions.
   - `display: flex` on `#main`: Centers the focal element.
6. **Easing**: `back.out(1.7)` adds subtle overshoot for a lively motion.

## Code Snippet

### JavaScript
```javascript
const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
                y: e.y,
                ease: "back.out(1.7)" // springy motion
    });
});

// Hover feedback on focal image
image.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2, duration: 0.5, ease: "back.out(1.7)" });
});
image.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.5, ease: "back.out(1.7)" });
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
         display: flex;
         justify-content: center;
         align-items: center;
}
#image {
    width: 40vw;
    height: 60vh;
    background-size: cover;
    background-position: center;
}
```

## How It Works
- **Event Flow**: `mousemove` provides viewport `x`/`y`. GSAP animates `#cursor` to those coordinates.
- **No Interference**: `pointer-events: none` ensures the custom cursor doesn't steal hover/clicks.
- **Feedback on Focus**: Enlarging the cursor on `#image` hover aids discoverability.

## Common Pitfalls
- Forgetting `pointer-events: none` causes hover/click issues.
- Using `position: absolute` for the cursor can break alignment on scroll.
- Animating `top/left` is less performant; prefer transforms via GSAP `x`/`y`.

## Try It Yourself
1. Change the cursor color/size in CSS.
2. Add a small trail by duplicating the cursor and staggering animations.
3. Swap the `ease` to `power3.out` or `elastic.out(1, 0.3)` and compare feel.
