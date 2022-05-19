import {

} from "./actions"

const initialState={
    
}

export function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case GET_SOMETHING:
            return {...state, something: payload}
        default: return state;
    }
}