import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const BY_NAME = "BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";

export const getProducts = () => {
  return function(dispatch){
    return axios.get(`http://localhost:3001/product/all`)
      .then(resp => dispatch({type: GET_PRODUCTS, payload: resp.data}))
      .catch(error => alert(error))
  }
}

export const getProductById = (id) => {
  const product = { // Delete this product once api response is raised
    title: 'Test title',
    price: '$15000000',
    img: 'https://images.pexels.com/photos/9482552/pexels-photo-9482552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
  return {
    type: GET_PRODUCT_ID,
    payload: product
  };
  // return function(dispatch){
  //   return axios.get(`http://localhost:3001/*BACK ROUTE PENDING*/${id}`)
  //     .then(resp => dispatch({type: GET_PRODUCT_ID, payload: resp.data}))
  //     .catch(error => alert(error))
  // }
}

export function byName(name) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/product/name?name=${name}`)
    .then(resp => dispatch({type: BY_NAME, payload: resp.data}))
    .catch(error => alert(error))
  }
}

export function filterByCategory (category) {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
};

export function filterByPrice (optionSelected) {
  return {
    type: FILTER_BY_PRICE,
    payload: optionSelected
  };
};

export function createCategory(category) {
  return function(){
      return axios.post("http://localhost:3001/category", category)
          .then(alert('Category created successfully!'))
          .catch(error => console.log('El error en cuestion: ',error))
  };
};
