import React from 'react';
import { useState } from 'react';
import './style.css';
import teamPhoto from './images_25-26/team-photo.jpg'; 
import TeamDetails from "./TeamDetails.js";
import TeamDetails_26_27 from "./TeamDetails_26_27.js";
import ig from "./images/instagram.png";
import li from "./images/linkedin.png"
import twit from "./images/twitter.png" 
import git from "./images/github.png" 
import Footer from '../Footer.js';
import { motion, AnimatePresence } from 'framer-motion';

function AboutUs() {
  const [activeYear, setActiveYear] = useState('25-26');

  const currentTeam = activeYear === '25-26' ? TeamDetails : TeamDetails_26_27;

  return (
    <>
    <div className="team-main">
      
      <h1 className='top-10vh heading'> CSI COUNCIL</h1>
      
      {/* Elegant Glassmorphism Tab Selector */}
      <div className="tab-selector-container">
        <button 
          onClick={() => setActiveYear('25-26')} 
          className={`tab-button ${activeYear === '25-26' ? 'active' : ''}`}
        >
          {activeYear === '25-26' && (
            <motion.div 
              layoutId="active-pill" 
              className="active-pill" 
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="tab-text">Council 2025-26</span>
        </button>
        <button 
          onClick={() => setActiveYear('26-27')} 
          className={`tab-button ${activeYear === '26-27' ? 'active' : ''}`}
        >
          {activeYear === '26-27' && (
            <motion.div 
              layoutId="active-pill" 
              className="active-pill" 
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="tab-text">Council 2026-27</span>
        </button>
      </div>

      <div className="grid">
        <motion.ul 
          id="hexGrid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {currentTeam.map((member) => (member &&
              <motion.li 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="hex" 
                key={`${activeYear}-${member.id}`}
              >
                <div className="hexIn">
                  <div className="hexLink">
                    <div className='img' style={{ backgroundImage: `url(${member.img})` }} >
                      <h1 id="demo1">{member.name}</h1>
                      <p id="demo2">{member.post}</p>
                      <div className='socials row'>
                        {member.ig && (
                          <a href={member.ig} target='_blank' rel="noreferrer" >
                            <img className='social-img' src={ig} alt='instagram' />
                          </a>
                        )}
                        {member.git && (
                          <a href={member.git} target='_blank' rel="noreferrer" >
                            <img className='social-img' src={git} alt='github' />
                          </a>
                        )}
                        {member.linkedin && (
                          <a href={member.linkedin} target='_blank' rel="noreferrer" >
                            <img className='social-img' src={li} alt='linkedin' />
                          </a>
                        )}
                        {member.twit && (
                          <a href={member.twit} target='_blank' rel="noreferrer" >
                            <img className='social-img' src={twit} alt='twitter' />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <br></br>
      </div>

      {/* ================== TEAM PHOTO SECTION ================== */}
      {activeYear === '25-26' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='team-photo-section'
        >
          <h2 className='heading'>The Whole Team</h2>
          <img src={teamPhoto} alt="CSI Team 2025-26" className='full-team-image' />
        </motion.div>
      )}
      {/* ========================================================== */}
      
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs;
