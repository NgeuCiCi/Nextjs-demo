import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
    GET_POSTS,
    getPostsSuccess,
    getPostsFailed,

    ADD_POST,
    addPostFailed,
    addPostSuccess,

    DELETE_POST,
    deletePostsSuccess,
    deletePostsFailed,

    UPDATE_POST,
    updatePostsSuccess,
    updatePostsFailed
} from '../action/postAction';
import { getPosts, addPost, deletePost, updatePost } from '../../../pages/api/hello';

function* getPostsSaga() {
    // //debugger;
    try {
        const data = yield call(getPosts);
        yield put(getPostsSuccess(data));
    } catch (error) {
        yield put(getPostsFailed(error.message));
    }
}

function* getPostsWatcher() {
    // //debugger
    yield takeEvery(GET_POSTS, getPostsSaga);
}



function* addPostSaga(action) {
    // debugger
    try {
        const data = yield call(addPost, action.payload);
        console.log(action.payload)
        console.log(data)
        yield put(addPostSuccess({ ...action.payload, ...data }));
    } catch (error) {
        yield put(addPostFailed(error.message));
    }
}
function* addPostWatcher() {
    // debugger;
    yield takeLeading(ADD_POST, addPostSaga);
}

function* deletePostSaga(action) {
    // debugger;
    try {
        const data = yield call(deletePost, action.payload);
        // debugger;
        console.log(data)
        yield put(deletePostsSuccess({
            id: action.payload
            //data
        }));
    }
    catch (error) {
        yield put(deletePostsFailed(error.message));

    }
}

function* deletePostWatcher() {
    // debugger;
    yield takeLeading(DELETE_POST, deletePostSaga)
}
function* updatePostSaga(action) {
    //debugger
    try {
        const data = yield call(updatePost, action.payload)
        yield put(updatePostsSuccess({
            data
        }))
    } catch (error) {
        yield put(updatePostsFailed(error.message));

    }
}

function* updatePostWatcher() {
    yield takeLeading(UPDATE_POST, updatePostSaga)
}

export default function* postsSaga() {
    //debugger;
    yield all([getPostsWatcher(), addPostWatcher(), deletePostWatcher(), updatePostWatcher()]);
}
