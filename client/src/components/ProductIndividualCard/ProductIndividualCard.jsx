import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductIndividualCard({
    id,
    name,
    price,
    image,
    categories,
    ranking
}) {

    const imageName ='../../img_products/' + image + '.jpg';

    console.log(id)
    return (
        <>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div className="px-4 py-2">
                    <h1 className="text-gray-900 font-bold text-3xl uppercase">{name}</h1>
                    <p className="text-gray-600 text-sm mt-1">{categories}</p>
                </div>
                <img className="h-56 w-full object-cover mt-2" src={imageName} alt='asd' />
                <div className="flex items-center justify-between px-4 py-2 bg-amber-700">
                    <h1 className="text-gray-200 font-bold text-xl">${price} - Ranking: {ranking}</h1>
                    <NavLink to={`/details/${id}`}>
                    <div className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Details</div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default ProductIndividualCard;