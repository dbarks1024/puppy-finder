import { combineReducers } from 'redux';
import FindDogsReducer from './FindDogsReducer';
import BreedReduce from './BreedReducer';
import SettingsReducer from './SettingsReducer';
import DogsReducer from './DogsReducer';


export default combineReducers({
    findDogsReducer: FindDogsReducer,
    dogs: DogsReducer,
    breeds: BreedReduce,
    settings: SettingsReducer
});
