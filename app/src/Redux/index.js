import { createStore, applyMiddleware } from 'redux'
import { rootSaga } from './Saga'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './Reducers'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


// const presistConfig = {
//     key: 'root',
//     storage:AsyncStorage,
//     whitelist: ['authReducer'],
//     stateReconciler: autoMergeLevel2,
// }

const sagaMiddleware = createSagaMiddleware();
export const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
