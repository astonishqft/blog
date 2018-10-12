import { reducer as front } from './frontReducer';

import { reducer as globalState } from './globalStateReducer';

import admin from './admin';
import { combineReducers } from 'redux';

export default combineReducers({
    front,
    globalState,
    admin
});
