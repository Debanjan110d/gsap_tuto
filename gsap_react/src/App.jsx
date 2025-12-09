import React from 'react'
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

  return (  
    <>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </>
  )
}

export default App