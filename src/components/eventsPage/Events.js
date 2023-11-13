// eslint - disable - next - line
import React from "react";
import "./event.css";
import UpcomingEventCard from "./upcoming";
import Card from "./Card";
import eventList from "./eventList.json";
import { Link } from 'react-router-dom';
import Swiper  from "./Swiper";
import Footer from "../Footer";

function Events() {
  const upcoming = eventList.filter((card) => card.type === "upcoming");
  
  return (
    <>
    <div className="events">
      <section>
        <div className="container ">
          <h1 className="heading">Forthcoming Event</h1>
        </div>
        <div className="upcoming-events ">
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
      </section>

        
        {/* <div className="container my-5 ">
          <h1>Previous Event</h1>
        </div> */}
      <section>
      <Swiper />
      {/* <MyCarousel /> */}
        {/* <SpringCarousel /> */}
      </section>

      </div>
      <Footer/>
      </>
    
  );
}

export default Events;
