import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import image1 from './img/programming-background-collage.jpg';
import image2 from './img/man-recording-studio-music-production.jpg';


function MyCarousel() {
  return (
    <Carousel
    showThumbs={false} 
    autoPlay={true} 
    interval={3000} 
    infiniteLoop={true}
    >
      <div >
        <img src={image1} alt="Image 1" style={{height:"40rem"}} />
      </div>
      <div >
        <img src={image2} alt="Image 2" style={{height:"40rem"}}/>
      </div>
      <div >
        <img src={image1} alt="Image 1" style={{height:"40rem"}} />
      </div>
      <div >
        <img src={image2} alt="Image 2" style={{height:"40rem"}}/>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
  
  
