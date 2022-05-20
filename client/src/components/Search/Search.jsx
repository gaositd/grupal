import React from 'react'
import { byName } from '../../redux/actions.js'

const Search = () => {

    function handleName(e) {
        dispatch(byName(e.target.value))
      }
    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleName} />
        </div>
    )
}

export default Search