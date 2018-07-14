import { combineReducers } from 'redux';
import DogsReducer from './DogsReducer';


export default combineReducers({
    dogs: DogsReducer,
});
 
