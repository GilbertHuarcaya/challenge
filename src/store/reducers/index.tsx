import { combineReducers } from 'redux';

import tasks from './taskReducers';
import users from './userReducers';

export const reducers = combineReducers({ tasks, users });
