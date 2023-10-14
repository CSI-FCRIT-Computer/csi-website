import React, { useState } from 'react';
import { FaCalendar, FaLocationDot } from 'react-icons/fa6';

const Card = ({ image, title, content, location, date, time }) => {
  const iconStyle = {
    color: '#D83F31',
    marginRight: '.7rem',
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="card__body">
      <div>
        <div className="card__img">
          <img src={image} alt={title} onClick={togglePopup} style={{ cursor: 'pointer' }} />
        </div>
        <div className="hidden">
          <div className="card__title">{title}</div>
          <div className="card__description">
            <p>{content}</p>
          </div>
          <div className="card__ldt">
            <div className="card__description">
              <FaLocationDot style={iconStyle} />
              {location}
            </div>
            <div className="card__description">
              <FaCalendar style={iconStyle} />
              {date} {time}
            </div>
            <button>MORE</button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup" id="popup1">
          <div className="overlay">
            <div className="content">
              <div className="close-btn" onClick={togglePopup}>
                &times;
              </div>
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique culpa dicta, nihil enim eligendi non, repellendus, sint sunt iure numquam! Rem pariatur totam ut, eos placeat voluptas illum a.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
