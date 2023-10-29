import "./styles.css";
import React from 'react'
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Events from "./components/eventsPage/Events";
import AboutUs from "./components/aboutUsPage/AboutUs";
import Sponsors from "./components/sponsorsPage/Sponsors";
import ContactUs from "./components/contactUsPage/ContactUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starbg from "./components/homepage/Starbg";


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
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
      </BrowserRouter>
      

    </div>
  );
}
