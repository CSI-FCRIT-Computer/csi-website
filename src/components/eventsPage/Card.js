import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Card = ({ image, title, content, location, date, time }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 "  style={{ maxWidth: '420px' }}>
      <div className="card card-bg-color" onClick={togglePopup}>
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <Modal show={showPopup} onHide={togglePopup} centered>
        <div className="dark-modal-bg"> {/* Apply dark background to the modal */}
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{content}</p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Date and Time:</strong> {date} {time}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={togglePopup}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
