import "./styles.css";
import React from 'react'
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Events from "./components/eventsPage/Events";
import ContactUs from "./components/contactUsPage/ContactUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starbg from "./components/homepage/Starbg";
import Team from './components/aboutUsPage/Team';
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
<AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    zIndex: 9999, // set the z-index value
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    zIndex: 9999, // set the z-index value
    border: '3px solid var(--cursor-color)'
  }}
/>

        <Starbg />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}
