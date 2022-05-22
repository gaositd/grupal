import {
  GET_SOMETHING,
  GET_PRODUCT_ID,
  BY_NAME,
  FILTER_BY_CATEGORY
} from "./actions"

const initialState={
  products: [],
  filteredProducts: [],
  productDet: {}
}

export function rootReducer(state = initialState, { type, payload }){
  switch (type) {
    case GET_SOMETHING:
      return {...state, something: payload}
    case GET_PRODUCT_ID:
      return {...state, productDet: payload}
    case BY_NAME:
      return {...state, products: payload};
    case FILTER_BY_CATEGORY:
      let filteredProducts = state.products.filter(p => {
        return p.category.includes(payload);
      });
      return {...state, filteredProducts};
    default: return state;
  }
}