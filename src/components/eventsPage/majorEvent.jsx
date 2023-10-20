import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const MajorEventCard = ({ event }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 mx-auto">
      <div className="card card-bg-color text-center">
        <h4 className="card-title mt-2">{event.title}</h4>
        <div className="mx-auto carousel-container">
          <Carousel>
            {event.img.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image.image} alt={event.title} className="d-block w-100 img-fluid" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="event-details p-3">
          <p>{event.content}</p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Date and Time:</strong> {event.date} {event.time}
          </p>
          <Button variant="primary" className="btn btn-sm float-right">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MajorEventCard;
