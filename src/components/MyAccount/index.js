import Header from "../Header"
import "./index.css"
// MyAccount.js
import React from 'react';

const MyAccount = () => {
  // Dummy user details for demonstration
  const user = {
    username: 'JohnDoe',
    address: '123 Main St, Cityville',
    image: 'https://as2.ftcdn.net/v2/jpg/01/15/85/23/1000_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg',
   
  };

  return (
    <div className="myaccount-page">
        <Header/>
        <div className="myaccount">
      <h1 className="heading">My Account</h1>
      <div>
        <img src={user.image} alt="User" style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
        <p>Username: {user.username}</p>
        <p>Address: {user.address}</p>
      </div>
      <h2 className="heading">Recent Orders</h2>
        <p>NO RECENT ORDERS</p>
    </div>
    </div>
  );
};

export default MyAccount;
