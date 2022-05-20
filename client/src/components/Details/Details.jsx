import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Details.module.css'

const product = {
  title: 'Test title',
  price: '$10',
  img: 'https://images.pexels.com/photos/9482552/pexels-photo-9482552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

function Details() { // Should have as argument the ID of the product that is gonna be shown: function Details({id})
  const id = 1; // Delete when ID comes as argument
  
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   async function newId(id) {
  //     setLoading(true)
  //     await dispatch(getProductById(id))  //This sets in the store the product i want to see the details
  //     setLoading(false)
  //   }
  //   if(id) newId(id)
  // }, [disp])

  // const product = useSelector(state => state.productDet)


  if(!id) {
    return <p>How did you get here? Please send review! Anyways, come again with a recipe to get details!</p>
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <div>
        <h1>Details page</h1>
        <div className={styles.detailscontainer}>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <img src={product.img} alt="not found bro" />
        </div>
      </div>
  );
};

export default Details;