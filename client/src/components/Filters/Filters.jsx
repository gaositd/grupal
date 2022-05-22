import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Filters.module.css';
import { filterByCategory, filterByPrice } from '../../redux/actions';

function Filters() {
    const dispatch = useDispatch();

    const handleSelectCategory = (e) => {
        dispatch(filterByCategory(e.target.value))
        console.log('select');
    }

    const handleSelectPrice = (e) => {
        dispatch(filterByPrice(e.target.value))
        console.log('select');
    }

    const categories = ['Carpinteria', 'Programacion'];

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
                        <option key={i} value={ctgry}>{ctgry}</option>
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