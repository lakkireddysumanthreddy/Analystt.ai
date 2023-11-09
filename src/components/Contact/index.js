import Header from "../Header"
// Contact.js
import React from 'react';
import "./index.css"

const Contact = () => {
  // Dummy contact information
  const contactInfo = {
    email: 'contact@example.com',
    phone: '+1 (123) 456-7890',
    address: '456 Main St, Townsville',
  };

  return (
    <div>
        <Header/>
        <div className="contactpage">
            <img className="contac-image" src="https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.jpg?s=1024x1024&w=is&k=20&c=ePzMmpr2JHgjnN6E7th3qqbNJyILNewIKUUJw1DSHG8=" alt="img"/>
             <div className="contact">
                <h1>Contact Us</h1>
                <div>
                    <p>Email: {contactInfo.email}</p>
                    <p>Phone: {contactInfo.phone}</p>
                    <p>Address: {contactInfo.address}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
