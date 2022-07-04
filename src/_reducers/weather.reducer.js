import { userConstants } from '../_constants';

export function weather(state = {}, action) {
    switch (action.type) {
        case userConstants.WEATHER_DATA:
            return { ...action.data };
        
        default:
            return state
    }
}