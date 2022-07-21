import { combineEpics } from 'redux-observable';
import { userEpics } from '../../features/user/epics';

export default combineEpics(userEpics);
