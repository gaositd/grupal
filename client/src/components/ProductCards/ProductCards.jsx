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
    const statePage = useSelector(state => state.pagination)
    const holeState = useSelector(state => state)
    
    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const paginate = function (pageNumber) {
        setCurrentPage(pageNumber);
    };
    
    const products = filteredProducts.length ? filteredProducts : allProducts;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        if (statePage) setCurrentPage(statePage);
    }, [holeState, filteredProducts]);
   
    return (
        <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
            {currentProducts ? currentProducts.map((p, i) => {
                return (
                    <React.Fragment key={i}>
                        {/* <h3>Id de producto actual: {p.id_product}</h3> */}
                        <ProductIndividualCard
                            id={p.id}
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
                <br></br>
            <Pagination 
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ProductCards;