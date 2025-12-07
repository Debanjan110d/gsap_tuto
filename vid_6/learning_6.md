# Text Animation Effect (vid_6)

This project demonstrates a simple yet effective text animation using GSAP.

## How it works

1.  **Structure**: The `index.html` contains an `h1` element inside a main container.
2.  **Splitting**: The `script.js` uses a function `brokenText()` to grab the text content of the `h1`.
    - It splits the text string into individual characters using `.split("")`.
    - It wraps each character in a `<span>` tag.
    - It replaces the `h1`'s original text with this new HTML string of spans.
3.  **Styling**:
    - `style.css` ensures the body is centered.
    - `h1 span` is set to `display: inline-block` so that transform properties (like `y` translation) work on them. Inline elements cannot be transformed.
    - `#main h1` has `overflow: hidden` to ensure the characters appear to "rise up" from nowhere, rather than being visible below the text line before the animation starts.
4.  **Animation**:
    - `stagger: 0.05` creates the wave-like effect where each character starts animating slightly after the previous one.

## Advanced Animation (Updated)

We enhanced the animation to split the text from the middle:

1.  **Logic**: The code calculates the `middleIndex` of the text.
2.  **classes**: Characters before the middle index get the class `first-half`, and those after get `second-half`.
3.  **GSAP**:
    - `first-half` spans animate with a positive stagger (`0.05`), flowing left-to-right (or start-to-middle).
    - `second-half` spans animate with a negative stagger (`-0.05`), flowing right-to-left (or end-to-middle), creating a converging effect.

