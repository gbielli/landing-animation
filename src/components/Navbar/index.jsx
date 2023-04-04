import React from 'react';
import './style.scss';
import {gsap} from "gsap";
import SplitText from '../../utils/Split3.min';
import { useEffect } from 'react';

const Navbar = () => {

  useEffect(() => {
    const split = new SplitText("#text", {
      type: "lines",
      linesClass:  "lineChild",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (

   <div className="navbar" data-scroll-section>
    <div id='text'>Menu</div>
    <div id='text'>guillaume bielli</div>
    <div id='text'>cart</div>
   </div> 
  )
}

export default Navbar