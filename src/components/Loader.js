import React from 'react';
import './Loader.scss';
import Starbg from "./homepage/Starbg";
const Loader = () => {

  return (
    <div className="dark-background">
    <Starbg />
      <div className="loader">
        <div id="universe">
          <div id="galaxy">
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            {/* Loop in JSX */}
            {[...Array(4)].map((_, i) => (
              <div id={`orbit${i}`} key={`orbit${i}`}>
                <div id={`pos${i}`} key={`pos${i}`}>
                  <div id={`dot${i}`} key={`dot${i}`}></div>
                </div>
              </div>
            ))}
            {/* End of loop */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

