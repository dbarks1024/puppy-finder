import { combineReducers } from 'redux';
import FindDogsReducer from './FindDogsReducer';
import SettingsReducer from './SettingsReducer';
import DogsReducer from './DogsReducer';


export default combineReducers({
    findDogsReducer: FindDogsReducer,
    dogs: DogsReducer,
    settings: SettingsReducer
});
