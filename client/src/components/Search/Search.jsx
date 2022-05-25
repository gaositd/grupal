import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { byName } from '../../redux/actions.js'

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
            <p>Input to search by name: </p>
            <input type="text" placeholder="Search" onChange={e => handleChange(e)} />
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default Search