import React from 'react';
import { FaCalendar,FaLocationDot } from "react-icons/fa6";

const UpcomingEventCard = ({ image, title, content, location, date, time }) => {
    // const iconStyle = {
    //   color: '#D83F31', // Set your desired color here
    //   marginRight: '.7rem'
    // };
    return (
      <>
        <div class="card text-white my-3 card-bg-color" style={{maxWidth:1100}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={image} alt="" srcset="" class="img-fluid rounded-start"/>
      </div>
      <div class="col-md-8 text-center">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
          <p class="card-text"><small class="text-muted">{date}</small></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
      </>
    );
  };
export default UpcomingEventCard;
