import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductIndividualCard from '../ProductIndividualCard/ProductIndividualCard';
import Pagination from '../Pagination/Pagination'
import { getProducts } from '../../redux/actions';

function ProductCards() {
    // UNCOMMENT WHEN REAL DATA COMES 
    const dispatch = useDispatch()

    const allProducts = useSelector(state => state.products);
    const filteredProducts = useSelector(state => state.filteredProducts);

    useEffect(() => {
        dispatch(getProducts())
    }, []);
    const products = filteredProducts.length ? filteredProducts : allProducts;

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const paginate = function (pageNumber) {
        setCurrentPage(pageNumber);
    };
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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