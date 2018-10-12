import {put, call, take, select} from 'redux-saga/effects';
import { get, post} from '../fetch/fetch';
import { actionTypes as IndexActionTypes } from '../reducers/globalStateReducer';
import { actionTypes as NewArticleTypes } from '../reducers/adminManagerNewArticle';

export function* saveArticle(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        let id = yield select(state => state.admin.newArticle.id);
        if(id) {
            data.id = id;
            return yield call(post, '/admin/article/updateArticle', data);
        }else {
            return yield call(post, '/admin/article/addArticle', data);
        }
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* saveArticleFlow() {
    while (true) {
        const action = yield take(NewArticleTypes.SAVE_ARTICLE);
        const {title, subTitle, content, tags=[]} = action.payload.data;
        if(title === '') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章标题', msgType: 0});
        } else if(content === '') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章内容', msgType: 0});
        } else if (tags.length === 0) {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请选择文章分类', msgType: 0});
        }
        if(title && content && tags.length>0) {
            let res = yield call(saveArticle, action.payload.data);
            if(res && res.code === 0) {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
                setTimeout(function() {
                    location.replace('/admin/managerArticle');
                }, 1000)
            }else if (res.message === '身份信息已过期，请重新登录') {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
                setTimeout(function () {
                    location.replace('/');
                }, 1000);
            } else {
                yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
            }
        }
    }

}