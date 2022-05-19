import axios from "axios"

export const GET_SOMETHING = "GET_SOMETHING"

export const getRecipes = (query) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/something`, {params: {query: query}})
            .then(resp => dispatch({type: GET_SOMETHING, payload: resp.data}))
            .catch(error => alert('Error in getSomething: ',error))
    }
}