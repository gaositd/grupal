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
  const imageName ='../../img_products/' + product.img + '.jpg';
  console.log(product)
  return (
      // <div>
      //   <h1>Details page</h1>
      //   <div className={styles.detailscontainer}>
      //     <p>Title: {product.title}</p>
      //     <p>Price: {product.price}</p>
      //     <img src={product.img} alt="not found bro" />
      //   </div>
      // </div>
      

      <div class=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    <div class="w-full flex justify-between p-3">
      <div class="flex">
      </div>
      <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    {/* <img class="w-full bg-cover" src={imageName} alt='asd' /> */}
    
    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="far fa-heart cursor-pointer"></i>
        <h1 class="text-lg text-gray-700 font-bold">{product.name}</h1>
      </div>
      <br></br>

      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Description:</div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
           {product.description}
        </div>
      </div>

      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Price:</div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
           ${product.price} USD
        </div>
      </div>

      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Ranking:</div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
           {product.ranking}
        </div>
      </div>

      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Stock:</div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
           {product.stock} places
        </div>
      </div>

      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Categories:</div>
      <div class="pt-1">
        <div class="mb-2 text-sm">{product.categories}
           {/* {product.categories.map(c => {
            return (<p>{c}</p>)
          })} */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Details;