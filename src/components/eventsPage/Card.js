import React from 'react';
import { FaCalendar,FaLocationDot } from "react-icons/fa6";

const Card = ({ image, title, content, location, date, time }) => {
  const iconStyle = {
    color: '#D83F31', // Set your desired color here
    marginRight: '.7rem'
  };
  return (
    <div className="card__body">
        <div className="card__img"><img src={image} alt={title}/></div>
        <div className="card__title">{title}</div>
        <div className="card__description"><p>{content}</p></div>
        <div className="card__ldt">
          <div className="card__description"><FaLocationDot style={iconStyle}/>{location}</div>
          <div className="card__description"><FaCalendar style={iconStyle}/>{date} {time}</div>
        </div>
    </div>
  );
};

export default Card;
