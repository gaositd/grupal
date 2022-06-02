import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const BY_NAME = "BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PAGINATION = "PAGINATION";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export const getProducts = () => {
  return function(dispatch){
    return axios.get(`http://localhost:3006/product/all`)
      .then(resp => dispatch({type: GET_PRODUCTS, payload: resp.data}))
      .catch(error => alert(error))
  }
}

export const getProductById = (id) => {
  return function(dispatch){
    return axios.get(`http://localhost:3006/product/${id}`)
      .then(resp => dispatch({type: GET_PRODUCT_ID, payload: resp.data}))
      .catch(error => alert(error))
  }
  // return function(dispatch){
  //   return axios.get(`http://localhost:3001/*BACK ROUTE PENDING*/${id}`)
  //     .then(resp => dispatch({type: GET_PRODUCT_ID, payload: resp.data}))
  //     .catch(error => alert(error))
  // }
}

export function byName(name) {
  return function (dispatch) {
    return axios.get(`http://localhost:3006/product/name?name=${name}`)
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
      return axios.post("http://localhost:3006/category", category)
          .then(alert('Category created successfully!'))
          .catch(error => console.log('El error en cuestion: ',error))
  };
};

export const getCategories = () => {
  return function(dispatch){
    return axios.get(`http://localhost:3006/category`)
      .then(resp => dispatch({type: GET_CATEGORIES, payload: resp.data}))
      .catch(error => alert(error))
  }
}

export const pagination = (pageNumber) => {
  return {
      type: PAGINATION,
      payload: pageNumber
  };
};

export function signUp(user) {
  return function(){
      return axios.post("http://localhost:3006/user/signup", user)
          .then(resp => {
            if(typeof(resp.data) === 'string') alert(resp.data)
            else alert('Welcome to our platform')
          })
          .catch(error => console.log('Signup error',error))
  };
};

export function login(user) {
  return function(dispatch){
      return axios.post("http://localhost:3006/user/login", user)
          .then(resp => dispatch({type: LOGIN, payload: resp.data}))
          .catch(error => console.log('Login error: ',error))
  };
};

export function logout() {
  return function(dispatch){
    return dispatch({type: LOGOUT})
  }
}
