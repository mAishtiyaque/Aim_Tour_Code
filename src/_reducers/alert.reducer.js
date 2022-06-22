import { alertConstants } from '../_constants';

export function alert(state={} , action) {
  
    switch (action.type) {
        case alertConstants.REQUEST:
            return {
                ...state,
                alertClass: 'alert-request',
                message: action.message
                
            };
        case alertConstants.SUCCESS:
            return {
                ...state,
                alertClass: 'alert-success',
                message: action.message
            };
        case alertConstants.INFO:
                return {
                    ...state,
                    alertClass: 'alert-info',
                    message: action.message
                };
        case alertConstants.ERROR:
            return {
                ...state,
                alertClass: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}