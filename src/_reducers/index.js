import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';
const rootReducer = combineReducers({
    alert,
    registration,
    authentication
});

export default rootReducer;