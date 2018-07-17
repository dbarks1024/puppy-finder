import { UPDATE_BREEDS } from '../actions/types';

const INITIAL_STATE = {
    selectedBreeds: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_BREEDS:
        console.log(action.payload);
            if (state.selectedBreeds.indexOf(action.payload) === -1) {
                state.selectedBreeds.push(action.payload); 
            } else {
                state.selectedBreeds.splice(state.selectedBreeds.indexOf(action.payload), 1);
            }
            return { ...state,
                selectedBreeds: state.selectedBreeds
            };
        default:
            return state;
    }
};

