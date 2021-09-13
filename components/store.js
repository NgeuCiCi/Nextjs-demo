import { createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import rootReducer from './store/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/saga/rootSaga';

// const saga = createSagaMiddleware();


// const makeStore = context => createStore(rootReducer, applyMiddleware(saga));

// export const wrapper = createWrapper(makeStore, { debug: true });
// saga.run(rootSaga);

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();

    // 2: Add an extra parameter for applying middleware:
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    // 3: Run your sagas on server
    (store).sagaTask = sagaMiddleware.run(rootSaga);

    // 4: now return the store:
    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });