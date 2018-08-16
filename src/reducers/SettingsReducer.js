import { CHANGE_SIZE, CHANGE_GENDER, CHANGE_LOCATION, CHANGE_AGE } from '../actions/types';

const INITIAL_STATE = {
    size: 'any',
    gender: 'either',
    location: '',
    age: 'any'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIZE:
      return { ...state, size: action.payload };
    case CHANGE_GENDER: 
      return { ...state, gender: action.payload };
    case CHANGE_LOCATION: 
      return { ...state, location: action.payload };
    case CHANGE_AGE: 
      return { ...state, age: action.payload };    
    default:
      return state;
  }
};

