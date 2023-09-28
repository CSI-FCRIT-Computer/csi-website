import React from "react";
import "./event.css";
import MyCarousel from "./Carousel";
import Card from "./Card";
import eventList from "./eventList.json";

function Events() {
  const technicalCards = eventList.filter((card) => card.type === "Technical");
  const hackathon = eventList.filter((card) => card.type === "Hackathon");
  return (
    <div className="event__body">
      <div className="all">
        <div className="event-heading">
          <h1>Hackathons</h1>
        </div>
        <div className="event__container">
          {hackathon.map((card) => (
            <Card
              key={card.id}
              image={card.img}
              title={card.title}
              tagLine={card.tagLine}
              content={card.content}
              location={card.location}
              time={card.time}
              date={card.date}
            />
          ))}
        </div>
        <div className="event-heading">
          <h1>Technical Events</h1>
        </div>
        <div className="event__container">
          {technicalCards.map((card) => (
            <Card
              key={card.id}
              image={card.img}
              title={card.title}
              tagLine={card.tagLine}
              content={card.content}
              location={card.location}
              time={card.time}
              date={card.date}
            />
          ))}
        </div>
      </div>
      <div className="event-heading">
        <h1>Previous Event</h1>
      </div>
      <MyCarousel />
      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default Events;
