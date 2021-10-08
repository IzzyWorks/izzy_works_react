import { combineReducers } from 'redux';
import cssTransitionReducer from './cssTransitionReducer';

export default combineReducers({
  style: cssTransitionReducer,
});
