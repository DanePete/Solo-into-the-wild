import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginPage from '../LoginPage/LoginPage';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container landing-container">
      <div className="grid">
        <div className="grid-col grid-col_8">
          <div className="hero-text">
            OUT OF THE CITY <br /> BACK INTO NATURE
          </div>

          <LoginPage />

        </div>
        <div className="grid-col grid-col_4">

          <center>
            {/* <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button> */}
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
