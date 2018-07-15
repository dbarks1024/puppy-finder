import { combineReducers } from 'redux';
//import FindDogsReducer from './FindDogsReducer';
import DogsReducer from './DogsReducer';


export default combineReducers({
    dogs: DogsReducer,
});
 
