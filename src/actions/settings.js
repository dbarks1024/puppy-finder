import { UPDATE_BREEDS, ADD_ALL_BREEDS, CLEAR_BREEDS } from './types';

export const updateBreeds = (breedName) => {
    return {
        type: UPDATE_BREEDS,
        payload: breedName
    };
};

export const addAllBreeds = () => {
    return (dispatch, getState) => {
        const breedsList = getState().breeds.breed;
        const allBreeds = [];
        for (let i = 0; i < breedsList.length; i++) {
           allBreeds.push(breedsList[i].$t); 
        }

        dispatch({
            type: ADD_ALL_BREEDS,
            payload: allBreeds
        });
    };
};

export const clearAllBreeds = () => {
    return {
        type: CLEAR_BREEDS,
        payload: []
    };
};
