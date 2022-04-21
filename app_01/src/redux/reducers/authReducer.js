import * as types from './actionTypes';

const initialState = {
    loading: false,
    error: false,
    currentUser: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.LOGOUT_SUCCSESS:
            return {
                ...state,
                currentUser: null,
                loading: false,
            }
        case types.REGISTER_SUCCSESS:
        case types.LOGIN_SUCCSESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state

    }
}