import { combineReducers } from 'redux'
// import { apiConstants } from '../../themes/constants';
import {authReducer} from './authReducer';
import {globalReducer} from './globalReducer';
import {homeReducer} from './homeReducer';

import { apiConstants } from '../../constants/appConstants';




const appReducer = combineReducers({
  authReducer,
  globalReducer,
  homeReducer
})
const rootReducer = (state, action) => {
  if (action.type === apiConstants.API_REMOVE_TOKEN) {
    state = undefined; // or to initial state if {} you want any data without session 
   }
  return appReducer(state, action)
}

export default rootReducer
