import { fork } from 'redux-saga/effects';
import { loginFlow, registerFlow, user_auth } from './homeSaga';

import { getAllTagsFlow, addTagFlow, delTagFlow } from './adminManagerTagsSaga';
import { saveArticleFlow } from './adminManagerNewArticle';

export default function* rootSaga() {
    yield fork(loginFlow);
    yield fork(registerFlow);
    yield fork(user_auth);

    yield fork(getAllTagsFlow);
    yield fork(addTagFlow);
    yield fork(delTagFlow);

    yield fork(saveArticleFlow);

}