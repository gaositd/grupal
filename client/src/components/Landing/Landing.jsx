import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.landingtitle}>Learning Management System - Project Name</h1>
      <NavLink className={styles.landingLinkHome} to='/home'>Enter the app</NavLink>
      <NavLink className={styles.landingLinkAdmin} to='/admin'>Admin site</NavLink>
    </div>
  );
};

export default Landing;