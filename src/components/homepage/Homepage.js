import { useState, useEffect } from "react";
import "./Homepage.css";
import bg from './csi-homepage2.png'
import React from 'react'
import { Link } from "react-router-dom";
const Homepage=()=> {
  const [content, setContent] = useState(0);
  const [ltransform, setLTransform] = useState("0vmax");
  const [tshift, setTshift] = useState("20vmax");
  const [isContentExpanded1, setIsContentExpanded1] = useState(
    window.innerWidth > 750
  );
  const [isContentExpanded2, setIsContentExpanded2] = useState(
    window.innerWidth > 750
  );
  // useEffect(() => {
  //   // Check window width on mount and update isContentExpanded
  //   const handleResize = () => {
  //     setIsContentExpanded(window.innerWidth > 750);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function renderContent1() {
    if (content === 2) {
      setLTransform("0vmax");
      // setTshift("20vmax");
    } else if (content === 0) {
      setLTransform("-40vmax");
      // setTshift("0vmax");
    } else {
      setLTransform("25vmax");
      // setTshift("0vmax");
    }
  }
  function renderContent2() {
    if (content === 2) {
      // setLTransform("0vmax");
      setTshift("20vmax");
    } else if (content === 0) {
      // setLTransform("-20vmax");
      setTshift("0vmax");
    } else {
      // setLTransform("25vmax");
      setTshift("0vmax");
    }
  }
  const toggleContent1 = () => {
    setIsContentExpanded1(!isContentExpanded1);
  };

  const toggleContent2 = () => {
    setIsContentExpanded2(!isContentExpanded2);
  };
  return (
    <div className="homepage">
      <img
        src={bg}
        className="homepage_background"
        alt="background-img"
        style={{ left: ltransform, top: tshift }}
      />

      {/* Landing View */}
      {content === 0 /*|| content === 1 || content === 2*/ && (
        <section className="landing">
          <h1 className="landing__title">Computer Society of India</h1>
          <h2 className="landing__subtitle">
            Department of <br/>
            Computer Engineering
          </h2>
          <h3 className="landing__subsub">Fr. Conceicao Rodrigues Institute of Technology </h3><br/>
          <button
            onClick={() => {
              setContent(1);
              renderContent1();
              renderContent2();
            }}
            className="landing__button"
          >
            EXPLORE
          </button>
        </section>
      )}

      {/* About Us */}
      {content === 1 && (
        <>
          <h2 className="title ani_title">CSI FCRIT</h2>
          <section className="about">
            {/* <h1 className="title">CSI</h1> */}
            <h1 className="about__title">ABOUT US</h1>
            <p className="about__content">
              {isContentExpanded1
                ? "CSI FCRIT COUNCIL UNDER THE CSI CHAPTER of India aims to create a platform for students to enhance their knowledge and skills in the field of computer science. The chapter fosters a sense of partnership among its members, encouraging collaboration and networking. In addition to organizing various engaging activities at the college's chapter and student branches, the CSI also conducts periodic seminars and events to keep students updated with the latest advancements in technology and provide them with a platform to learn and grow. CSI has organised many major events till now with  participation of over 500 students."
                : "CSI FCRIT COUNCIL UNDER THE CSI CHAPTER of India aims to create a platform for students to enhance their knowledge and skills in the field of computer science..."}
            </p>
            {window.innerWidth <= 750 && (
            <button onClick={toggleContent1} className="slide3__button">
              {isContentExpanded1 ? "Read Less" : "Read More"}
            </button>
            )}
            <button
              onClick={() => {
                setContent(2);
                renderContent1();
                renderContent2();
              }}
              className="slide3__button"
            >
              CSI Chapter
            </button>
            {/* <Link to="/Events" className="no-underline">
              <button
                
                className="slide3__button"
              >
                Check Our Events
              </button>

            </Link> */}
            
          </section>
        </>
      )}

      {/* Slide 3 */}
      {content === 2 && (
        <>
          <h2 className="title anti_ani">CSI Chapter</h2>
          <section className="slide3">
            {/* <h1 className="title">CSI</h1> */}
            <h1 className="about__title">Computer Society of India</h1>
            <p className="about__content">
              {isContentExpanded2
                ? "The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a computer user group and felt the need to organize tteir activities. They also wanted to share their knowledge and exchange ideas on what they felt was a fast emerging sector. Today the CSI takes pride in being the largest and most professionally managed association of and for IT professionals in India. The purposes of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science and IT."
                : "The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a computer user group and felt the need to organize tteir activities..."}
            </p>
            {window.innerWidth <= 750 && (
            <button onClick={toggleContent2} className="slide3__button">
              {isContentExpanded2 ? "Read Less" : "Read More"}
            </button>
            )}
            <button
              onClick={() => {
                setContent(0);
                renderContent1();
                renderContent2();
              }}
              className="slide3__button"
            >
              HOMEPAGE
            </button>
            {/* <Link to="/Team" className="no-underline">
              <button

                className="slide3__button"
              >
                Meet Our Team
              </button>

            </Link> */}
          </section>
        </>
      )}
    </div>
  );
}

export default Homepage;
