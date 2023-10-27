import React from 'react';

const UpcomingEventCard = ({ image, title, content, location, date, time }) => {
  return (
    <>
      <div className="card text-white my-3 card-bg-color mx-auto" style={{ maxWidth: 1100 }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img src={image} alt="" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
              <p className="card-text">
                <strong>Location:</strong> {location}
              </p>
              <p className="card-text">
                <strong>Date and Time:</strong> {date} {time}
              </p>
              <i className="btn btn-primary"> 
                Go somewhere
               </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventCard;
