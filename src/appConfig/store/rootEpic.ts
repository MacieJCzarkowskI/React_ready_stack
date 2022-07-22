import { combineEpics } from 'redux-observable';
import { userEpics } from '../../features/user/epics';
import { authEpics } from '../../features/authorization/epics';

export default combineEpics(userEpics, authEpics);
