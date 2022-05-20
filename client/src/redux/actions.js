import axios from "axios"

export const GET_SOMETHING = "GET_SOMETHING"
export const BY_NAME = "BY_NAME"

export const getRecipes = (query) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/something`, {params: {query: query}})
            .then(resp => dispatch({type: GET_SOMETHING, payload: resp.data}))
            .catch(error => alert('Error in getSomething: ',error))
    }
}

export function byName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/product?name=${name}`);
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}