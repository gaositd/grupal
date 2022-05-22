import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Filters.module.css';
import { filterByCategory } from '../../redux/actions';

function Filters() {
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch(filterByCategory(e.target.value))
        console.log('select');
    }

    const categories = ['Carpinteria', 'Programacion'];

    return(
        <nav>
            <select
                className={style.select}
                name='filterByCategory'
                defaultValue={true}
                onChange={handleSelect}
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
                }): ''}
            </select>
        </nav>
    )
}

export default Filters;