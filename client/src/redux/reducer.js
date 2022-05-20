import {
  GET_SOMETHING,
  GET_PRODUCT_ID
} from "./actions"

const initialState={
  products: [],
  productDet: {}
}

export function rootReducer(state = initialState, {type, payload}){
  switch (type) {
    case GET_SOMETHING:
      return {...state, something: payload}
    case GET_PRODUCT_ID:
      return {...state, recipe: payload}
    default: return state;
  }
}