import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          console.log(data.token);
          Cookies.set('Token', data.token, { expires: 30 });
          Navigate('/'); // Redirect to the home page
        } else {
          Navigate('/login'); // Redirect to the login page
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <div className='loginPage'>
      <div>
        <img className='login-image' src="https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg" alt="img"/>
        </div>
        <div className='login-card'>
        <h2>Login</h2>
        <br/>
        <div className='marginbreak'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <button className='button-login' onClick={handleLogin}>Login</button>
        </div>
        </div>
      
    </div>
  );
};

export default LoginForm;
