import {
    GET_SOMETHING, BY_NAME
} from "./actions"

const initialState={
    products: [],
}

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_SOMETHING:
            return {
                ...state,
                something: payload
            };
        case BY_NAME:
            return {
                ...state,
                products: payload
            };
        default: return state;
    }
}