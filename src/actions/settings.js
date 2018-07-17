import { UPDATE_BREEDS } from './types';

export const updateBreeds = (breedName) => {
    return {
        type: UPDATE_BREEDS,
        payload: breedName
    };
};
