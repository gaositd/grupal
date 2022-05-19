import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Landing.css'

function Landing() {
  return (
    <div className='landing'>
      <h1 className='landingtitle'>Learning Management System - Project Name</h1>
      <NavLink className='landingLinkHome' to='/home'>Enter the app</NavLink>
    </div>
  );
};

export default Landing;