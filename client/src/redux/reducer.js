import {
  GET_PRODUCTS,
  GET_PRODUCT_ID,
  BY_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE
} from "./actions"

const initialState={
  products: [],
  filteredProducts: [],
  productDet: {}
}

export function rootReducer(state = initialState, { type, payload }){
  switch (type) {
    case GET_PRODUCTS:
      return {...state, products: payload}

    case GET_PRODUCT_ID:
      return {...state, productDet: payload}

    case BY_NAME:
      return {...state, products: payload}

    case FILTER_BY_CATEGORY:
      {
        let filteredProducts = state.products.filter(p => {
          return p.category.includes(payload);
        });
        return { ...state, filteredProducts }
      }

    case FILTER_BY_PRICE:
      {
        let filteredProducts;
        if (payload === 'highest') {
          filteredProducts = state.products.sort((a, b) => {
            return parseFloat(b.price) - parseFloat(a.price)
          });
        };
        if (payload === 'lowest') {
          filteredProducts = state.products.sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price);
          });
        };
        if(payload === 'all') {
          filteredProducts = state.products;
        }
        return { ...state, filteredProducts }
      }

    default: return state;
  }
}