import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ image, title, content, location, date, time }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setIsExpanded(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false);
    }
  }, [showPopup]);

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setShowPopup(false), 450);
  };

  return (
    <>
      {/* Swiper Card */}
      <div className="card card-bg-color" onClick={() => setShowPopup(true)}>
        <div className="card-image-container">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-overlay-info">
            <h3 className="card-overlay-title">{title}</h3>
            <div className="card-overlay-meta">
              <span className="card-overlay-date">
                <i className="fa-regular fa-calendar"></i> {date}
              </span>
              <span className="card-overlay-location">
                <i className="fa-solid fa-location-dot"></i> {location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay + modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="ev-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* The modal shell — always 900px wide, clips content */}
            <motion.div
              className="ev-modal"
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 24 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button className="ev-close" onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Image — slides LEFT when expanded */}
              <motion.div
                className="ev-image-pane"
                animate={{ width: isExpanded ? '42%' : '100%' }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              >
                <img src={image} alt={title} className="ev-image" />
                {/* Gradient over image for brand feel */}
                <div className="ev-image-gradient" />
              </motion.div>

              {/* Details panel — translates in from right */}
              <motion.div
                className="ev-details-pane"
                initial={{ x: '100%', opacity: 0 }}
                animate={{
                  x: isExpanded ? '0%' : '100%',
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              >
                <div className="ev-details-inner">
                  <h2 className="ev-title">{title}</h2>

                  <div className="ev-meta-grid">
                    <div className="ev-meta-item">
                      <span className="ev-meta-icon">
                        <i className="fa-regular fa-calendar-days"></i>
                      </span>
                      <div>
                        <span className="ev-meta-label">Date</span>
                        <span className="ev-meta-val">{date}</span>
                      </div>
                    </div>
                    <div className="ev-meta-item">
                      <span className="ev-meta-icon">
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      <div>
                        <span className="ev-meta-label">Time</span>
                        <span className="ev-meta-val">{time}</span>
                      </div>
                    </div>
                    <div className="ev-meta-item">
                      <span className="ev-meta-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <div>
                        <span className="ev-meta-label">Location</span>
                        <span className="ev-meta-val">{location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="ev-description">{content}</p>

                  <button className="ev-collapse-btn" onClick={handleClose}>
                    <i className="fa-solid fa-compress"></i> Collapse
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
