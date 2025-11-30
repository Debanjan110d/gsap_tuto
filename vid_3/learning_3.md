# GSAP Tutorial - Video 3: Elastic String Animation

## Goal
Create an interactive "guitar string" effect where the user can pull and release a string using the mouse, and it snaps back with an elastic animation.

## HTML Structure (SVG)
We use an SVG `<path>` to draw the string.
- **Path Command**: `M 10 100 Q 500 10 990 100`
  - `M`: Move to start point (10, 100).
  - `Q`: Quadratic Bezier curve.
    - Control Point: (500, 10) - determines the curve's peak.
    - End Point: (990, 100).
- **Responsiveness**:
  - `width="100%"` and `viewBox="0 0 1000 200"` ensure the SVG scales with the screen.
  - `preserveAspectRatio="none"` allows the string to stretch horizontally.

## CSS Styling
- The body is a flex container to center the `#string` div.
- `#string` acts as the container for the SVG.

## JavaScript Logic
### 1. Event Listeners
We attach the event listeners to the **container** (`#string`), not the path itself.
- **Why?** The path is very thin and has `fill="transparent"`, making it difficult to hover over precisely. The container provides a larger hit area (200px height).

### 2. Handling Events
- `mouseenter`: Fires when the mouse enters the string area. We capture the event details (`dets`) to track mouse position.
- `mouseleave`: Fires when the mouse leaves the area. This is where we will trigger the "snap back" animation.

```javascript
var string = document.querySelector("#string");

string.addEventListener("mouseenter", function (dets) {
    console.log(dets); // Logs mouse event details (coordinates, etc.)
});

string.addEventListener("mouseleave", function () {
    console.log("left"); // Will trigger the elastic release animation
});
```

## Next Steps
- Use `mousemove` to update the path's curve dynamically based on the mouse position (`dets.y`).
- Use GSAP (Elastic ease) to animate the string back to its original position on `mouseleave`.
