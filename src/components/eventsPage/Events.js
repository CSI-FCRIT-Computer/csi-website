import React from "react";
import "./event.css";
import MyCarousel from "./Carousel";
import MajorEventCard from "./majorEvent";
import UpcomingEventCard from "./upcoming";
import Card from "./Card";
import eventList from "./eventList.json";

function Events() {
  const previous_event = eventList.filter((card) => card.type === "previous_event");
  const upcoming = eventList.filter((card) => card.type === "upcoming");
  return (
    <div className="event__body">
      <div className="all">
        <div className="event-heading">
          <h1>Upcoming Events</h1>
        </div>
        <div className="event__container">
        {upcoming.map((card) => (
            <UpcomingEventCard
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
          <h1>Previous Event</h1>
        </div>
        <div className="event__container">
          {previous_event.map((card) => (
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
        <h1>Major Events</h1>
        <div className="event__container">
        {upcoming.map((card) => (
            <MajorEventCard
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
      {/* <MyCarousel /> */}
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
