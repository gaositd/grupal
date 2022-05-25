import React from 'react';
import ProductCards from '../ProductCards/ProductCards';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import styles from './Home.module.css'


function Home() {

  return (
    <>
      <div className={styles.background}>
        <Search />
        <Filters />
        <ProductCards />

      </div>
    </>
  );
};
  
export default Home;