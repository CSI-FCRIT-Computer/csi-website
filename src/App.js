import "./styles.css";
import React from 'react'
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Events from "./components/eventsPage/Events";
import Sponsors from "./components/sponsorsPage/Sponsors";
import ContactUs from "./components/contactUsPage/ContactUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starbg from "./components/homepage/Starbg";
import Team from './components/aboutUsPage/Team';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Navbar /> */}
        {/* <Homepage /> */}
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
