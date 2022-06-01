import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { byName } from '../../redux/actions.js'
import style from './Search.module.css'

const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }
    
    function handleClick() {
        dispatch(byName(name))
    }

    return (
        <div>
            <input type="text" placeholder="Search by name" onChange={e => handleChange(e)} className={style.inp} />
            <button onClick={handleClick} className={style.btn}>Buscar</button>
        </div>
    )
}

export default Search