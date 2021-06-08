import {InferActionsTypes} from "../rootReducer";
import {authActions} from "./actions";

type InitialStateType = typeof initialState

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const AuthReducer = (state = initialState, action: InferActionsTypes<typeof authActions>):InitialStateType => {
    switch (action.type) {
        case "SET_IS_AUTH":
            return {
                ...state, isAuth: action.isAuth
            };
        case "SET_USER":
            return {
                ...state, ...action.authData
            };
        default:
            return {...state}
    }
};

export default AuthReducer