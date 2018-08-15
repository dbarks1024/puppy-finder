import {
    createStore,
    applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    persistReducer
} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['findDogsReducer']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
