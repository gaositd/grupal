import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../redux/actions';

import styles from './Details.module.css'

function Details() {
  const { id } = useParams();
  console.log('El id del rey; ',id)

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function newId(id) {
      setLoading(true)
      await dispatch(getProductById(id))  //This sets in the store the product i want to see the details
      setLoading(false)
    }
    if(id) newId(id)
    console.log('Entramos a useeffect mi rey')
  }, [])

  const product = useSelector(state => state.productDet)


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