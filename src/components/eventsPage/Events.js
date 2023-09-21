import React, { useState, useEffect } from 'react';
import "./event.css"
import MyCarousel from './Carousel'
import Card from './Card'
import eventList from './eventList.json'



function Events() {
  return (
    <div className='all'>
        <MyCarousel/> 
       <hr />
      <header>
        <h1>Events</h1>
      </header>
      <div className="container">
      {eventList.map((card) => (
        <Card 
        key={card.id} 
        image={card.img} 
        title={card.title} 
        content={card.content} 
        location={card.location} 
        time={card.time} 
        date={card.date} 
        />
      ))}
      </div>
    </div>
  )
}

export default Events
