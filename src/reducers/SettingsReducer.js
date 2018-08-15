import { UPDATE_BREEDS, ADD_ALL_BREEDS, CLEAR_BREEDS, CHANGE_SIZE, CHANGE_GENDER, CHANGE_LOCATION, CHANGE_AGE, SEARCH_BREEDS } from '../actions/types';
import { allBreeds } from './breeds';

const INITIAL_STATE = {
    selectedBreeds: allBreeds,
    searchBreeds: '',
    size: 'any',
    gender: 'either',
    location: '',
    age: 'any'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_BREEDS:
            if (state.selectedBreeds.indexOf(action.payload) === -1) {
                state.selectedBreeds.push(action.payload); 
            } else {
                state.selectedBreeds.splice(state.selectedBreeds.indexOf(action.payload), 1);
            }
            return { ...state,
                selectedBreeds: state.selectedBreeds
            };
        case ADD_ALL_BREEDS:
        console.log(action);
            return { ...state,
                selectedBreeds: action.payload
            };
        case CLEAR_BREEDS:
            return { ...state,
                selectedBreeds: []
            };
        case SEARCH_BREEDS:
            return { ...state, searchBreeds: action.payload };
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

