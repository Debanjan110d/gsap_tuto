# Random Circle Animation
This component demonstrates how to animate a circle to random X positions using GSAP, React `useState`, and `useRef`.

## How it works

1.  **`useState` Hook**:
    ```javascript
    const [circle, setCircle] = useState(0);
    ```
    We use `useState` to store the current random value. When this state updates, it triggers a re-render and subsequently the `useGSAP` hook.

2.  **Generating Random Numbers**:
    ```javascript
    const random = gsap.utils.random(-500, 500, 100);
    ```
    We use GSAP's utility function `gsap.utils.random(min, max, snap)` to generate a number between -500 and 500, snapping to increments of 100. **Crucially, this is called inside the `onClick` handler** so a new number is generated every time the button is clicked.

3.  **`useGSAP` Hook**:
    ```javascript
    useGSAP(() => {
    gsap.to(".circle", {
        x: circle,
        duration: 0.5
    })
    }, { dependencies: [circle], scope: mainRef });
    ```
    -   We pass `[circle]` to the dependencies array. This means the GSAP animation runs whenever the `circle` state changes.
    -    We use `scope: mainRef` to ensure we only target the `.circle` inside our specific `<main>` container, preventing conflicts with other circles in the app.

4.  **`useRef` Hook**:
    ```javascript
    const mainRef = useRef(null);
    ```
    This ref is attached to the parent `<main>` element to define the scope for `useGSAP`.
