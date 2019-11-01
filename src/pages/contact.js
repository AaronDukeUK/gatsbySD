import React from 'react';

import Layout from '../components/layout/layout';

import './contact.css';

const Contact = () => (
  <Layout>
    <div className="containerContact">
      <div className="contact">
        <h1>Contact</h1>
        <p>
          It is always advised to book a table beforehand.
          If you have any queries, please do not hesitate to contact us.
          We are always happy to help.
        </p>
        <h2>Phone</h2>
        <p className="contactInfo">01760 788101</p>
        <h2>Email</h2>
        <a href="mailto: info@squirrelsdrey.co.uk">info@ squirrelsdrey.co.uk</a>
        <h2>Address</h2>
        <p className="contactInfo">The Squirrels Drey</p>
        <p className="contactInfo">70 The Street</p>
        <p className="contactInfo">Sporle</p>
        <p className="contactInfo">Kings Lynn</p>
        <p className="contactInfo">PE32 2DR</p>
      </div>
    </div>
  </Layout>
);

export default Contact;
