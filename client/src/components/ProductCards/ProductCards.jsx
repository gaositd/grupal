import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductIndividualCard from '../ProductIndividualCard/ProductIndividualCard';
import Pagination from '../Pagination/Pagination'
import { getProducts } from '../../redux/actions';

function ProductCards() {
    // UNCOMMENT WHEN REAL DATA COMES 
    const dispatch = useDispatch()

    const products = useSelector(state => state.products);
    // const filteredProducts = useSelector(state => state.filteredProducts);

    useEffect(() => {
        dispatch(getProducts())
    }, []);
    // const products = filteredProducts.length ? allProducts = filteredProducts : products = allProducts;

    //MOCKED DATA - COMMENT WHEN REAL DATA COMES 
    
    // const products = [
    //     {
    //         id_product: 1,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 2,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 3,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 4,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 5,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 6,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 7,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    //     {
    //         id_product: 8,
    //         name: 'Producto 1',
    //         price: 100,
    //         description: 'Descripcion del producto 1',
    //         image: 'https://tdj.gg/uploads/attachs/96920_20560_w9RC4W-QqXw-200x200.jpg',
    //         categories: 'Categoria 1',
    //         ranking: 4,
    //         stock: 10
    //     },
    // ]

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const paginate = function (pageNumber) {
        setCurrentPage(pageNumber);
    };
    console.log('Products despues de la busqueda:',products)
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log('Esto es currentProducts: ',currentProducts)
    console.log('Tipo de currentProducts',typeof(currentProducts))

    return (
        <div>
            {currentProducts ? currentProducts.map(p => {
                return (
                    <React.Fragment key={p.id_product}>
                        <h3>Id de producto actual: {p.id_product}</h3>
                        <ProductIndividualCard
                            id={p.id_product}
                            name={p.name}
                            price={p.price}
                            image={p.image}
                            categories={p.categories}
                            ranking={p.ranking}
                        />
                    </React.Fragment >
                )
            })
                : ''}
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ProductCards;