import React, { useEffect, useState } from "react";
import "./Team.css"; // Import your CSS file
import Card from "./card";
import Mobcard from "./Mobcard";
import contentData from "./info";

function About() {
  const [activeContent, setActiveContent] = useState("content1");

  useEffect(() => {
    // Wrap your code inside a check for element existence
    const imgBx = document.querySelectorAll(".imgBx");
    const contentBx = document.querySelectorAll(".contentBx");

    if (imgBx.length > 0 && contentBx.length > 0) {
      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].addEventListener("click", function () {
          for (let i = 0; i < contentBx.length; i++) {
            contentBx[i].className = "contentBx";
          }

          // Check if the element with this.dataset.id exists before setting its class name
          const contentElement = document.getElementById(this.dataset.id);
          if (contentElement) {
            contentElement.className = "contentBx active";
          }

          for (let i = 0; i < imgBx.length; i++) {
            imgBx[i].className = "imgBx";
          }

          // Check if the clicked element exists before setting its class name
          if (this) {
            this.className = "imgBx active";
          }

          setActiveContent(this.dataset.id);
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="heading mobile-view">
        <h1>Council 2023-24</h1>
      </div>
      <div className="container main">
        <div className="heading">
          <h1>Council 2023-24</h1>
        </div>
        <div className="icon">
          {Array(14)
            .fill(0)
            .map((_, index) => (
              <div
                className={`imgBx ${
                  activeContent === `content${index + 1}` ? "active" : ""
                }`}
                style={{ "--i": (360 / 14) * index }}
                data-id={`content${index + 1}`}
                key={index} // Make sure to add a unique key for each mapped element
              >
                <img src={contentData[index].img} alt="" />{" "}
                {/* Assuming you have an array of contentData */}
              </div>
            ))}
        </div>
        <div className="content">
          {contentData.map((content, index) => (
            <div
              className={`contentBx ${
                activeContent === `content${index + 1}` ? "active" : ""
              }`}
              id={`content${index + 1}`}
              key={index}
            >
              <Card
                img={content.img}
                name={content.name}
                post={content.post}
                insta={content.insta}
                linkedin={content.linkedin}
                github={content.github}
              />
            </div>
          ))}
        </div>
      </div>{" "}
      {/*  Closing tag for content class  */}
      {/* ------X-----X-----X-----X-----X----- Mobile view ------X-----X-----X-----X-----X----- */}
      <div className="mobile-view main">
        <div className="content">
          {contentData.map((content) => (
            <Mobcard
              key={content.id}
              img={content.img}
              name={content.name}
              post={content.post}
              insta={content.insta}
              linkedin={content.linkedin}
              github={content.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
