import { combineReducers } from 'redux';

import covidReducer from './covid/covidReducer';

const rootReducer = combineReducers({
  covid: covidReducer,
});

export default rootReducer;
