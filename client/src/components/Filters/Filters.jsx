import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Filters.module.css';
import { filterByCategory, filterByPrice, pagination } from '../../redux/actions';


function Filters() {
    const dispatch = useDispatch();

    const handleSelectCategory = (e) => {
        dispatch(pagination(1))
        dispatch(filterByCategory(e.target.value))
    }

    const handleSelectPrice = (e) => {
        dispatch(pagination(1))
        dispatch(filterByPrice(e.target.value))
    }

    const categories = useSelector(state => state.categories);

    return(
        <nav>
            <select
                className={style.select}
                name='filterByCategory'
                defaultValue={true}
                onChange={handleSelectCategory}
            >
                <option
                    value='true'
                    disabled='disabled'
                >Filtrar por categoria
                </option>
                <option vallue='all'>All</option>
                {categories ? categories.map((ctgry, i) => {
                    return (
                        <option key={i} value={ctgry.name}>{ctgry.name}</option>
                    )
                }) : ''}
            </select>

            <select
                className={style.select}
                name='filterByCategory'
                defaultValue={true}
                onChange={handleSelectPrice}
            >
                <option
                    value='true'
                    disabled='disabled'
                >Filtrar por precio
                </option>
                <option value='all'>All</option>
                <option value='highest'>Highest price</option>
                <option value='lowest'>Lowest price</option>
            </select>
        </nav>
    )
}

export default Filters;