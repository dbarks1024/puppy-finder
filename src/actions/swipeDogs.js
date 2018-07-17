import { ADD_DOG, REMOVE_DOG } from './types';

export const addDog = (dog) => {
    console.log(dog);
    return {
        type: ADD_DOG,
        payload: dog
    };
};

export const removeDog = (dog) => {
    return {
        type: REMOVE_DOG,
        payload: dog
    };
};
