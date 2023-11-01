// eslint - disable - next - line
import React from "react";
import "./event.css";
// import MyCarousel from "./Carousel";
import MajorEventCard from "./majorEvent";
import UpcomingEventCard from "./upcoming";
import Card from "./Card";
import eventList from "./eventList.json";

function Events() {
  const previous_event = eventList.filter((card) => card.type === "previous_event");
  const upcoming = eventList.filter((card) => card.type === "upcoming");
  const majorEvent = eventList.filter((card) => card.type === "major_event") ;
  return (
    <div className="">
      <div className="p-5">
        <div className="container">
          <h1>Upcoming Events</h1>
        </div>
        <div className="">
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
        <div className="container my-5 ">
          <h1>Previous Event</h1>
        </div>
        <div className="container mx-auto">
          <div className="row">
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
      </div>
      <div className="container p-5">
        <h1>Major Events</h1>
        <div className="">
        {majorEvent.map((card) => (
      <MajorEventCard
        key={card.id}
        event={card} // Pass the entire card object to the component
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
