import { reducer as front } from './frontReducer';

import { reducer as globalState } from './globalStateReducer';

import { reducer as admin } from './adminManagerTags';
import { combineReducers } from 'redux';

export default combineReducers({
    front,
    globalState,
    admin
});
