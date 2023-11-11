// eslint-disable-next-line
import "./styles.css";
import React, { useEffect, useState } from 'react';
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Events from "./components/eventsPage/Events";
import ContactUs from "./components/contactUsPage/ContactUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starbg from "./components/homepage/Starbg";
import Team from './components/aboutUsPage/Team';
import AnimatedCursor from "react-animated-cursor";
// import "./components/Loader.scss";
// import Loader from "./components/Loader";


export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading &&(
        <div>
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
            zIndex: 9999, 
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            zIndex: 9999, 
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
      )}
    </div>
  );
}
