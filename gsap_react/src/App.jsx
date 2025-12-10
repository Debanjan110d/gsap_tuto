import React, { useRef, useState } from 'react'
//Lets import the gsap library
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function App() {
  
  //*Now lets use the gsap hook

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     duration: 4,
  //      x: 400,
  //      delay: 2,
  //      ease: "power1.out"
  //     });
  // })

  //Now lets use the useRef hook
  


  const boxRef = useRef(null);
  const mainRef = useRef(null); // Ref for the new section to scope animations

  useGSAP(() => {
    gsap.to(boxRef.current, {// ? We use ethe useref o particularly target the element and it give more controle on he element
      duration: 4,
       x: 400,
       delay: 2,
       ease: "power1.out"
      });
  })


    useGSAP(() => {
      gsap.to(".circle", {//?And in this approach the elment gets selected just like css selector but it does not gives us much controle on the element
        duration: 4,
         x: 400,
         delay: 2,
         ease: "power1.out"
        });//* So to get the more control we can pass a object here 
    },{scope:".container"})//! NOW only the element inside the container will get animated 
    //! But there is a problem  ,we have 2 containers and we want to animate one of them,and it does taht becaues its getting only the the 1st one but its not a good way to code it 

    //But we can also use the ref to animate the element
    //like this : const containerRef = useRef(null);
    //useGSAP(() => {
    //  gsap.to(containerRef.current, {
    //    duration: 4,
    //    x: 400,
    //    delay: 2,
    //    ease: "power1.out"
    //   });
    //})


  
  // --- NEW CODE ADDITION ---
  const [circle, setCircle] = useState(0); 
 

  useGSAP(() => {
    gsap.to(".circle", {
      x: circle,
      duration: 0.5
    })
  }, { dependencies: [circle], scope: mainRef }); // Scoped to mainRef to avoid affecting other circles
  // -------------------------

  return (  
    <>
       <div className="container">{/* // and here its will be like this : <div ref={containerRef} className="container"></div> */}
        <div className="circle"></div> 
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="container">
        <div className="circle"></div>
        <div  className="box"></div>
      </div>

      <main ref={mainRef} className="main-box">
        <button onClick={() => {
          const random = gsap.utils.random(-500, 500, 100);
          setCircle(random);
        }} className="animate-btn">Animate</button>
        <div className="circle"></div>
      </main>
    </>
  )
}

export default App