import { combineReducers } from 'redux';
import { userInfoReducer } from '../../features/userInfo';

const rootReducer = combineReducers({
  userInfo: userInfoReducer
});

export default rootReducer;
