import React from 'react';
import photos from '../../data';

import './style.scss';

const Featured = () => {
    const [firstUrl, secondUrl] = photos 
  return (
   <section className="featured-section"
   data-scroll-section>
    <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} data-scroll />
    </div>
    <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondUrl}  data-scroll />
    </div>
   </section>
  )
}

export default Featured