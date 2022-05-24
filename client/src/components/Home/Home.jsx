import React from 'react';
import ProductCards from '../ProductCards/ProductCards';
import Filters from '../Filters/Filters';
// import styles from './Home.module.css'


function Home() {

  return (
      <>
        <Filters/>
        <ProductCards/>
      </>
  );
};
  
export default Home;