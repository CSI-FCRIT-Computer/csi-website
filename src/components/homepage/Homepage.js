import { useState } from "react";
import "./Homepage.css";
import bg from 'csi-homepage2.png'

function Homepage() {
  const [content, setContent] = useState(0);
  const [ltransform, setLTransform] = useState("0vmax");
  const [tshift, setTshift] = useState("20vmax");

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

  return (
    <div className="homepage">
      <img
        src="{bg}"
        className="homepage_background"
        alt="background-img"
        style={{ left: ltransform, top: tshift }}
      />

      {/* Landing View */}
      {content === 0 /*|| content === 1 || content === 2*/ && (
        <section className="landing">
          <h1 className="landing__title">CSI</h1>
          <h2 className="landing__subtitle">
            Department of <br />
            Computer Engineering
          </h2>
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
          <h1 className="title ani_title">CSI</h1>
          <section className="about">
            {/* <h1 className="title">CSI</h1> */}
            <h1 className="about__title">ABOUT US</h1>
            <p className="about__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p
              onClick={() => {
                setContent(2);
                renderContent1();
                renderContent2();
              }}
              className="about__link"
            >
              CONTACT US
            </p>
          </section>
        </>
      )}

      {/* Slide 3 */}
      {content === 2 && (
        <>
          <h1 className="title anti_ani">CSI</h1>
          <section className="slide3">
            {/* <h1 className="title">CSI</h1> */}
            <h1 className="about__title">Lorem Ipsum</h1>
            <p className="about__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
          </section>
        </>
      )}
    </div>
  );
}

export default Homepage;
