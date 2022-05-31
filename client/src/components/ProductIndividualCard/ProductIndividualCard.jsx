import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductIndividualCard({
    id,
    name,
    price,
    image,
    categories,
    ranking,
}) {

    let addcar = { id, name, price };

    const addToCart = (addcar) => {

        let prodCart = [];
        prodCart = JSON.parse(localStorage.getItem('cartProduct')) || [];

        let exist = false;
        prodCart.forEach(item => {
            if (item.id === addcar.id) {
                exist = true;
            }
        });

        if (!exist) {
            prodCart.push(addcar);
            localStorage.setItem(`cartProduct`, JSON.stringify(prodCart));
            console.log(prodCart);
        } else if (exist) {
            alert('Producto ya existe en el carrito');
        }
    }

    const imageName = '../../img_products/' + image + '.jpg';


    console.log(id)
    return (
        <>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <NavLink to={`/details/${id}`}>
                    <div className="px-4 py-2">
                        <h1 className="text-gray-900 font-bold text-3xl uppercase">{name}</h1>
                        <p className="text-gray-600 text-sm mt-1">{categories}</p>
                    </div>
                    <img className="h-56 w-full object-cover mt-2" src={imageName} alt='asd' />
                </NavLink>
                <div className="flex items-center justify-between px-4 py-2 bg-amber-700">
                    <h1 className="text-gray-200 font-bold text-xl">${price} - Ranking: {ranking}</h1>
                    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" onClick={() => addToCart(addcar)}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductIndividualCard;