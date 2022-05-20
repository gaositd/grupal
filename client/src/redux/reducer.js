import {
  GET_SOMETHING,
  GET_PRODUCT_ID,
  BY_NAME
} from "./actions"

const initialState={
  products: [],
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
    default: return state;
  }
}