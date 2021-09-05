import { configureStore  } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import buttonReducer from '../features/footer/button/buttonSlice';

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name_change_button: buttonReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);


export default store;



