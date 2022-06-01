import {
  GET_PRODUCTS,
  GET_PRODUCT_ID,
  BY_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  GET_CATEGORIES,
  PAGINATION,
  CREATE_PRODUCT,
} from "./actions"

const initialState={
  products: [],
  filteredProducts: [],
  productDet: {},
  pagination: 0,
  categories: [],
}

export function rootReducer(state = initialState, { type, payload }){
  switch (type) {
    case GET_PRODUCTS:
      return {...state, products: payload}

    case GET_PRODUCT_ID:
      return {...state, productDet: payload}

    case BY_NAME:
      return {...state, filteredProducts: payload}

    case FILTER_BY_CATEGORY:
        let filteredProd = state.products.filter(p => p.categories.includes(payload));
        return { ...state, filteredProducts: filteredProd }

    case GET_CATEGORIES:
      return {...state, categories: payload}

    case PAGINATION:
      return {...state, pagination: payload}

    case FILTER_BY_PRICE:
      {
        let aux = []
        let filtProducts
        state.products.forEach(element => aux.push(element))
        console.log('esto es aux: ',aux)
        if (payload === 'highest') {
          filtProducts = aux.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        };
        if (payload === 'lowest') {
          filtProducts = aux.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        };
        if(payload === 'all') {
          filtProducts = aux;
        }
        return { ...state, filteredProducts: filtProducts }
      }
    
    case CREATE_PRODUCT:
      return state

    default: return state;
  }
}