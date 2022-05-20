import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import ProductIndividualCard from '../ProductIndividualCard/ProductIndividualCard';

function ProductCards() {
 // UNCOMMENT WHEN REAL DATA COMES 

    // const products = useSelector(state => state.products);

    // useEffect(() => {
        
    // }, [products]);

    const products = [
        {   id_product: 1,
            name: 'Producto 1',
            price: 100,
            description: 'Descripcion del producto 1',
            image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
            categories: 'Categoria 1',
            ranking : 4,
            stock: 10
        },
        {   id_product: 2,
            name: 'Producto 1',
            price: 100,
            description: 'Descripcion del producto 1',
            image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
            categories: 'Categoria 1',
            ranking : 4,
            stock: 10
        }
    ]

  return (
      <div>
        {products ? products.map(p => {
            return <ProductIndividualCard
                id={p.id_product}
                name={p.name}
                price={p.price}
                image={p.image}
                categories={p.categories}
                ranking={p.ranking}
                key={p.id_product}
            />
        })
        : ''}
      </div>
  );
};
  
export default ProductCards;