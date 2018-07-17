import { combineReducers } from 'redux';
import FindDogsReducer from './FindDogsReducer';
import BreedReduce from './BreedReducer';
import SettingsReducer from './SettingsReducer';
//import DogsReducer from './DogsReducer';


export default combineReducers({
    dogsReducer: FindDogsReducer,
    breeds: BreedReduce,
    settings: SettingsReducer
});
