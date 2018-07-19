import { UPDATE_BREEDS, ADD_ALL_BREEDS, CLEAR_BREEDS } from '../actions/types';
import { allBreeds } from './breeds';

const INITIAL_STATE = {
    selectedBreeds: allBreeds
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
        default:
            return state;
    }
};

