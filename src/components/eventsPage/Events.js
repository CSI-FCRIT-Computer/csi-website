import React from 'react';
import "./event.css"
import MyCarousel from './Carousel'
import Card from './Card'
import eventList from './eventList.json'



function Events() {
  const technicalCards = eventList.filter((card) => card.type === 'Technical');
  const nonTechnicalCards = eventList.filter((card) => card.type === 'Non Technical');
  const hackathon = eventList.filter((card) => card.type === 'Hackathon');
  return (
    <div className='all'>
        <MyCarousel/> 
        <div><h1>Hackathons</h1></div>
        <div className="container">
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
        <div><h1>Technical Events</h1></div>
        <div className="container">
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
        <div><h1>Non Technical Events</h1></div>
        <div className="container">
      {nonTechnicalCards.map((card) => (
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
  )
}

export default Events
