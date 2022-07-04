import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';
import { weather} from './weather.reducer';
const rootReducer = combineReducers({
    alert,
    registration,
    authentication,
    weather
});

export default rootReducer;