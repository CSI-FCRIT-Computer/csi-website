import React from 'react';

const Card = ({ image, title, content }) => {
  return (
    <div className="card__body">
        <div className="card__img"><img src={image} alt={title}/></div>
        <div className="card__title">{title}</div>
        <div className="card__description"><p>{content}</p></div>
    </div>
  );
};

export default Card;
