import { combineEpics } from 'redux-observable';
import { userInfoEpics } from '../../features/userInfo';

export default combineEpics(userInfoEpics);
