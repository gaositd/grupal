import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../redux/actions';

import styles from './Details.module.css'

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function newId(id) {
      setLoading(true)
      await dispatch(getProductById(id))  //This sets in the store the product i want to see the details
      setLoading(false)
    }
    if (id) newId(id)
  }, [])

  const product = useSelector(state => state.productDet)

  if (!id) {
    return <p>How did you get here? Please send review! Anyways, come again with a recipe to get details!</p>
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const imageName = '../../img_products/' + product.img + '.jpg';
  console.log(product)

  let starsAverage = product.reviews ? product.reviews.map(r => {
    return r.ranking
  }) : []

  let starsAverageNumber = Math.ceil(starsAverage.reduce((a, b) => a + b, 0) / starsAverage.length)

  let courseAverage;

  isNaN(!starsAverageNumber) ? courseAverage = starsAverageNumber : courseAverage = 3

  return (

    <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
      </div>
      <div className="px-3 pb-2">
        <div className="pt-2">
          <i className="far fa-heart cursor-pointer"></i>
          <h1 className="text-lg text-gray-700 font-bold">{product.name}</h1>
        </div>
        <br></br>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Description:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            {product.description}
          </div>
        </div>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Price:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            ${product.price} USD
          </div>
        </div>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Ranking:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            {product.ranking}
          </div>
        </div>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Stock:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            {product.stock} places
          </div>
        </div>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">Categories:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">{product.categories}
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="rating rating-sm">
          {
            courseAverage === 1 ? <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
              :
              <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

          {courseAverage === 2 ? <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
            :
            <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

          {courseAverage === 3 ? <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
            :
            <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

          {courseAverage === 4 ? <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
            :
            <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

          {courseAverage === 5 ? <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
            :
            <input type="radio" name={`rating-6-Product`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}
        </div>

        <br></br>

        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">User reviews:</div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            {product.reviews ? product.reviews.map((r, i) => {
              return (
                <div key={i}>
                  <div className="max-w-md py-4 px-8 bg-slate-200 shadow-lg rounded-lg my-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                      <img className="w-20 h-20 object-cover rounded-full border-2 border-amber-900" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='asd' />
                    </div>
                    <div>
                      <div className="rating rating-sm">
                        {r.ranking === 1 ? <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
                          :
                          <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

                        {r.ranking === 2 ? <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
                          :
                          <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

                        {r.ranking === 3 ? <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
                          :
                          <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

                        {r.ranking === 4 ? <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
                          :
                          <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}

                        {r.ranking === 5 ? <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} checked disabled />
                          :
                          <input type="radio" name={`rating-6${i}`} className="mask mask-star-2 bg-orange-400" style={{ cursor: 'default' }} disabled />}
                      </div>

                      <p className="mt-2 text-gray-600 font-semibold">{r.description}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <span href="#" className="text-xl font-medium text-indigo-500">{r.nickName}</span>
                    </div>
                  </div>
                </div>
              )
            }) : <p>No reviews yet!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;