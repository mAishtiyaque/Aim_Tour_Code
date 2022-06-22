import { userConstants } from '../_constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { ...state,registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {...state,registering:false,registration:false};
        case userConstants.REGISTER_FAILURE:
            return {registration:true};
        case userConstants.IS_REGISTERATION:
            return {
                ...state,registration:true
            }

        default:
            return state
    }
}