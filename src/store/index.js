import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ['dogsReducer']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
