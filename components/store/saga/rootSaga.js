import { all } from 'redux-saga/effects';
import postsSaga from './postSaga';

export default function* () {
    //debugger;
    yield all([postsSaga()]);
}
