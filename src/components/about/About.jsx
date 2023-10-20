import React, { useEffect, useState } from 'react';
import './Team.css'; // Import your CSS file
import Card from './card';
import Mobcard from './Mobcard';
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
import img6 from "./images/img6.jpg"
import img7 from "./images/img7.jpg"

function About() {
  const [activeContent, setActiveContent] = useState('content1');

  useEffect(() => {
    // Wrap your code inside a check for element existence
    const imgBx = document.querySelectorAll('.imgBx');
    const contentBx = document.querySelectorAll('.contentBx');

    if (imgBx.length > 0 && contentBx.length > 0) {
      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].addEventListener('click', function () {
          for (let i = 0; i < contentBx.length; i++) {
            contentBx[i].className = 'contentBx';
          }
          
          // Check if the element with this.dataset.id exists before setting its class name
          const contentElement = document.getElementById(this.dataset.id);
          if (contentElement) {
            contentElement.className = 'contentBx active';
          }

          for (let i = 0; i < imgBx.length; i++) {
            imgBx[i].className = 'imgBx';
          }

          // Check if the clicked element exists before setting its class name
          if (this) {
            this.className = 'imgBx active';
          }

          setActiveContent(this.dataset.id);
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>Council 2022-23</h1>
      </div>
      <div className="container main">
        <div className="icon">
          <div
            className={`imgBx ${activeContent === 'content1' ? 'active' : ''}`}
            style={{ '--i': -1.3 }}
            data-id="content1"
          >
            <img src={img1} alt="" />
          </div>
          <div
            className={`imgBx ${activeContent === 'content2' ? 'active' : ''}`}
            style={{ '--i': -2.35 }}
            data-id="content2"
          >
            <img src={img2} alt="" />
          </div>
          <div
            className={`imgBx ${activeContent === 'content3' ? 'active' : ''}`}
            style={{ '--i': 4.6 }}
            data-id="content3"
          >
            <img src={img3} alt="" />
          </div>
          <div
              className={`imgBx ${activeContent === 'content4' ? 'active' : ''}`}
              style={{ '--i': 4.1 }}
              data-id="content4"
          >
            <img src={img4} alt="" />
          </div>
          <div
              className={`imgBx ${activeContent === 'content5' ? 'active' : ''}`}
              style={{ '--i': 5.1 }}
              data-id="content5"
            >
              <img src={img5} alt="" />
          </div>
          <div
              className={`imgBx ${activeContent === 'content6' ? 'active' : ''}`}
              style={{ '--i': 6.2 }}
              data-id="content6"
            >
              <img src={img6} alt="" />
          </div>
          <div
              className={`imgBx ${activeContent === 'content7' ? 'active' : ''}`}
              style={{ '--i': 7.25 }}
              data-id="content7"
            >
              <img src={img7} alt="" />
          </div>
          <div
              className={`imgBx ${activeContent === 'content8' ? 'active' : ''}`}
              style={{ '--i': 7.8 }}
              data-id="content8"
            >
              <img src={img1} alt="" />
          </div>
        </div>


        <div className="content">
          <div className={`contentBx ${activeContent === 'content1' ? 'active' : ''}`} id="content1">
                 <Card img={img1} 
                        name="NAME" 
                        post="POST"
                        insta="#"
                        linkedin="#"
                        github="#"
                  />
                </div>
        
          <div className={`contentBx ${activeContent === 'content2' ? 'active' : ''}`} id="content2">
          <Card img={img2} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
          </div>

          <div className={`contentBx ${activeContent === 'content3' ? 'active' : ''}`} id="content3">
          <Card img={img3} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
          </div>

          <div className={`contentBx ${activeContent === 'content4' ? 'active' : ''}`} id="content4">
          <Card img={img4} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
                </div>
         
          <div className={`contentBx ${activeContent === 'content5' ? 'active' : ''}`} id="content5">
          <Card img={img5} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
                </div>
        
          <div className={`contentBx ${activeContent === 'content6' ? 'active' : ''}`} id="content6">
          <Card img={img6} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
                </div>
      
          <div className={`contentBx ${activeContent === 'content7' ? 'active' : ''}`} id="content7">
          <Card img={img7} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
                </div>
          
          <div className={`contentBx ${activeContent === 'content8' ? 'active' : ''}`} id="content8">
          <Card img={img1} 
                name="NAME" 
                post="POST"
                insta="#"
                linkedin="#"
                github="#"
                  />
          </div>
        </div>   {/*  Closing tag for content class  */}
      </div>     {/* Closing tag for container class */}




      {/* ------X-----X-----X-----X-----X----- Mobile view ------X-----X-----X-----X-----X----- */}
      <div className="mobile-view main">
        <div className="content">
         <Mobcard img={img1} 
                   name="NAME" 
                   post="POST"
                   insta="#"
                   linkedin="#"
                   github="#"
         />
          <Mobcard img={img2} 
                   name="NAME" 
                   post="POST"
                     insta="#"
                       linkedin="#"
                       github="#"
         />
         <Mobcard img={img3} 
                   name="NAME" 
                   post="POST"
                     insta="#"
                       linkedin="#"
                       github="#"
         />
         <Mobcard img={img4} 
                   name="NAME" 
                   post="POST"
                     insta="#"
                       linkedin="#"
                       github="#"
         />
      <Mobcard img={img5} 
                   name="NAME" 
                   post="POST"
                   insta="#"
                   linkedin="#"
                   github="#"
         />
          <Mobcard img={img6} 
                   name="NAME" 
                   post="POST"
                   insta="#"
                   linkedin="#"
                   github="#"
         />
       <Mobcard img={img7} 
                   name="NAME" 
                   post="POST"
                   insta="#"
                   linkedin="#"
                   github="#"
         />
          <Mobcard img={img1} 
                   name="NAME" 
                   post="POST"
                   insta="#"
                   linkedin="#"
                   github="#"
         />
        </div>
      </div>
    </div>
  );
}

export default About;
