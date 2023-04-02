import React, { useEffect, useState, useRef } from 'react'
import CustomCursor from '../CustomCursor';
import Header from '../components/Header';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useLocoScroll from '../hooks/useLocoScroll';

import '../styles/home.scss'



const Home = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(3);


const id = useRef(null);

const clear = () => {
  window.clearInterval(id.current);
  setPreloader(false);
};

useEffect(() => {
  id.current = window.setInterval(() => {
  setTimer((timer) => timer - 1);
  }, 1000);
  return () => clearInterval(id.current)
}, []);

useEffect(() => {
  console.log(timer)
   if (timer === 0) {
    clear();
   }
}, [timer]); 

  return (
    <>
    <CustomCursor />

    {preloader ? (
    <div className='loader-wrapper absolute'>
      <h1>Hello.</h1>
      <h2>Bonjour.</h2>
      <h2>Hola.</h2>
    </div>
    ) : (
    <div className="main-container" id="main-container" 
    data-scroll-container >
    <Navbar />
    <Header />
    <Featured />
    <About /> 
    <Gallery />
    <Footer />
    </div>
  )
}
</>
)}

export default Home