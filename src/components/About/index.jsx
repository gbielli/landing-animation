import React, {useEffect, useRef, useState} from 'react'
import SectionHeader from '../SectionHeader'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'
import cn from 'classnames'
import useOnScreen from '../../hooks/useOnScreen'

import './style.scss'

const About = () => {

  const ref = useRef();
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if(onScreen) setReveal(onScreen)
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
    const split = new SplitText("#headline", {
      type: "lines",
    }); 


    gsap.to(split.lines, {
      duration: 1,
      y: -20,
      opacity: 1, 
      stagger: 0.08,
      ease: "power2",
    });
  }
  }, [reveal]);

  return (
    <section className={cn("about-section")}
    data-scroll-section >
      <SectionHeader title='About' />
      <p ref={ref} id='headline'
      className={cn({'is-reveal': reveal})}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aliquam, sed quidem quaerat consequuntur ex necessitatibus rerum, repudiandae est veritatis, iste ab nobis. Repellat laudantium quis non qui ad minima!
        Perferendis quidem repudiandae itaque, atque eligendi aliquam vitae repellat corporis dolores. Deleniti, delectus. Numquam earum expedita aliquam placeat laboriosam, perspiciatis assum enda similique corporis blanditiis voluptates, laudantium soluta in pariatur quibusdam.
      </p>
    </section>
  )
}

export default About