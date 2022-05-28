import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const BY_NAME = "BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PAGINATION = "PAGINATION";
export const CREATE_PRODUCT = "CREATE_PRODUCT";


export const getProducts = () => {
  return function(dispatch){
    return axios.get(`http://localhost:3001/product/all`)
      .then(resp => dispatch({type: GET_PRODUCTS, payload: resp.data}))
      .catch(error => alert(error))
  }
}

export const getProductById = (id) => {
  return function(dispatch){
    return axios.get(`http://localhost:3001/product/${id}`)
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

export const getCategories = () => {
  return function(dispatch){
    return axios.get(`http://localhost:3001/category`)
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

export function createProduct(product) {
  return function (dispatch) {
    let productData = {
      ...product,
      ranking:Number(product.ranking),
      price:Number(product.price),
      stock:Number(product.stock),
      // categories: product.categories.map(ctgry => {
      //   return JSON.parse(ctgry);
      // }
      // )
    }
    try {
      return axios.post("http://localhost:3001/product", productData)
        .then(res => {
          dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
          })
        }).catch(error => { alert(error.message) })
    }
    catch (err) {
      alert(err.message)
    };
  };
};