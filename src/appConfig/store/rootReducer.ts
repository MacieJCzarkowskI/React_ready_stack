import { combineReducers } from 'redux';
import { userReducer } from '../../features/user/slice';
import { authReducer } from '../../features/authorization/slice';

const rootReducer = combineReducers({
	user: userReducer,
	authorization: authReducer,
});

export default rootReducer;
