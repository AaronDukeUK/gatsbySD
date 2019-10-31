import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="footer">

    <div className="footerTimes">
      <div>
        <h3>Opening Hours</h3>
        <p>Monday: Closed</p>
        <p>Tuesday: Closed</p>
        <p>Wednesday: 1700 - 2230</p>
        <p>Thursday: 1700 - 2230</p>
        <p>Friday: 1700 - 2330</p>
        <p>Saturday: 1200 - 2330</p>
        <p>Sunday: 1200 - 2130</p>
      </div>
      <div>
        <h3>Food Hours</h3>
        <p>Monday: Closed</p>
        <p>Tuesday: Closed</p>
        <p>Wednesday: Closed</p>
        <p>Thursday: 1730 - 2100</p>
        <p>Friday: 1730 - 2100</p>
        <p>Saturday: 1200 - 1500 / 1730 - 2100</p>
        <p>Sunday: 1200 - 1500</p>
      </div>
      <div className="logo" />
    </div>
    <div className="footerCopy">
      <h3>Made By: Duke Design</h3>
      <h3>The Little Kitchen Pantry Ltd 2019</h3>
    </div>
  </div>
);


export default Footer;
