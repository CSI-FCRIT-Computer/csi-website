import { useState } from "react";
import "./Homepage.css";
import bg from "./csi-homepage.jpg"
function Homepage() {
  const [content, setContent] = useState(0);
  const [transform, setTransform] = useState(
    "rotate(-50deg) translate(-23vmax, -15vmax)"
  );

  function renderContent() {
    if (content === 2) {
      setTransform("rotate(-50deg) translate(-23vmax, -15vmax)");
    } else if (content === 0) {
      setTransform("rotate(-40deg) translate(-37vmax, -51vmax)");
    } else {
      setTransform("rotate(70deg) translate(-48vmax,31vmax)");
    }
  }

  return (
    <div className="homepage">
      <img
        className="homepage_background"
        src={bg}
        alt="background-img"
        style={{ transform: transform }}
      />
      {/* Landing View */}
      {content === 0 && (
        <section className="landing">
          <h1 className="landing__title">CSI</h1>
          <h2 className="landing__subtitle">
            Department of <br />
            Computer Engineering
          </h2>
          <button
            onClick={() => {
              setContent(1);
              renderContent();
            }}
            className="landing__button"
          >
            EXPLORE
          </button>
        </section>
      )}

      {/* About Us */}
      {content === 1 && (
        <section className="about">
          <h1 className="about__title">ABOUT US</h1>
          <p className="about__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p
            onClick={() => {
              setContent(2);
              renderContent();
            }}
            className="about__link"
          >
            CONTACT US
          </p>
        </section>
      )}

      {content === 2 && (
        <section className="slide3">
          <h1 className="about__title">Lorem Ipsum</h1>
          <p className="about__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button
            onClick={() => {
              setContent(0);
              renderContent();
            }}
            className="slide3__button"
          >
            HOMEPAGE
          </button>
        </section>
      )}
    </div>
  );
}

export default Homepage;
