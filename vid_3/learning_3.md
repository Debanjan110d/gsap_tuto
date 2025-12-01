# GSAP Tutorial - Video 3: Elastic String Animation

## Concepts Learned
1.  **SVG Paths**: Using the `<path>` element with the `d` attribute to draw curves.
    *   `M`: Move to (start point).
    *   `Q`: Quadratic Bezier curve (control point, end point).
2.  **GSAP `attr` Plugin**: Animating attributes like the SVG `d` path.
    *   **Important**: Use `attr: { ... }` (lowercase), not `Attr`.
3.  **Mouse Interaction**:
    *   `mousemove`: Tracking mouse coordinates to update the curve control point dynamically.
    *   **Coordinate Mapping**: Using `getBoundingClientRect()` to map global mouse coordinates (`clientX`, `clientY`) to the SVG container's local coordinate system.
4.  **Elastic Ease**: Using `ease: "elastic.out(1, 0.2)"` to create a realistic bounce/wobble effect when the mouse leaves.
5.  **Visibility**: Using `overflow: visible` on the SVG to allow the curve to extend beyond the defined height.

## Code Snippet
```javascript
// Mouse Follow
string.addEventListener("mousemove", function (dets) {
    var rect = string.getBoundingClientRect();
    var relativeX = dets.clientX - rect.left;
    var relativeY = dets.clientY - rect.top;
    path = `M 10 100 Q ${relativeX} ${relativeY} 990 100`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    })
})

// Elastic Bounce
string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})
```
