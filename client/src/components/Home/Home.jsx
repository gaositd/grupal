import React from 'react';
import ProductCards from '../ProductCards/ProductCards';
import NavBar from '../NavBar/NavBar';
import Filters from '../Filters/Filters';
// import styles from './Home.module.css'


function Home() {

  return (
      <>
        <NavBar/>
        <Filters/>
        <ProductCards/>
      </>
  );
};
  
export default Home;