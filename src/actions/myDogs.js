import { ADD_DOG, REMOVE_DOG, ADD_BLACKLIST } from './types';

export const addDog = (dog) => {
    console.log(dog);
    return {
        type: ADD_DOG,
        payload: dog
    };
};

export const removeDog = (id) => {
    return {
        type: REMOVE_DOG,
        payload: id
    };
};

export const blacklistDog = (id) => {
    return {
        type: ADD_BLACKLIST,
        payload: id
    };
};
