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
    - GSAP is used to animate the spans from a starting position (`y: 100`) and opacity (`0`) to their natural position.
    - `stagger: 0.05` creates the wave-like effect where each character starts animating slightly after the previous one.
