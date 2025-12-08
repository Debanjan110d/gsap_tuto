# Scroll Direction Marquee (vid_7)

This project creates an interactive marquee effect that changes direction based on the user's scroll.

## How it works

1.  **Structure**:
    - A container `#move` holds multiple `.marq` divs.
    - Each `.marq` contains a text (`h1`) and an image (`img` - arrow).
    - Flexbox is used to align them effectively.

2.  **Styling**:
    - `#move` has `overflow: hidden` and `display: flex` to create a horizontal track.
    - `.marq` has `flex-shrink: 0` to ensure the items don't squash and maintain their width, extending off-screen if necessary.

3.  **Interaction (Script)**:
    - We listen for the `wheel` event on the `window`.
    - `e.deltaY` determines the scroll direction:
        - **Positive (> 0)**: Scrolling down. Marquee moves left (`translateX(-200%)`) and arrow rotates 180deg.
        - **Negative**: Scrolling up. Marquee moves right (`translateX(0%)`) and arrow resets to 0deg.
    - `gsap.to` handles the animation with `repeat: -1` for an infinite loop and `ease: "none"` for constant speed.

## Key Concepts

- **GSAP Repeat**: `repeat: -1` creates an infinite animation loop.
- **Wheel Event**: Detecting user scroll intent using `deltaY`.
- **Flexbox Layout**: Using `flex-shrink: 0` for horizontal scrolling strips.
