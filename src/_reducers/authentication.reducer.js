import { userConstants } from '../_constants';
let user = JSON.parse(localStorage.getItem('user'));
const initialStae = user ? { loggedIn: true, user } : {};

export function authentication(state = initialStae, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.user

            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                user: action.user

            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        case userConstants.FETCH_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case userConstants.FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                list: [...action.data]
            };
        case userConstants.FETCH_FAILURE:
            return {
                ...state,
                fetching: false
            };
            case userConstants.ADDED_SUCCESS:
                return {
                    ...state,
                    added: true,
                    list: [...action.data]
                };
                case userConstants.RESET_INPUT:
                    return {
                        ...state,
                        added: false
                    };
        case userConstants.DELETE_REQUEST:
            return {
                ...state,
                delItem: true

            };
        case userConstants.DELETE_SUCCESS:
            return {
                ...state,
                list: [...action.data],
                delItem: false
            };
        case userConstants.DELETE_FAILURE:
            return {
                ...state,
                delItem: false
            };
        default:
            return state
    }
}