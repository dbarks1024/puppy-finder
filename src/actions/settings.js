import { CHANGE_SIZE, CHANGE_GENDER, CHANGE_LOCATION, CHANGE_AGE } from './types';

export const changeSize = (size) => {
    return {
        type: CHANGE_SIZE,
        payload: size
    };
};

export const changeGender = (gender) => {
    return {
        type: CHANGE_GENDER,
        payload: gender
    };
};

export const changeLocation = (zip) => {
    return {
        type: CHANGE_LOCATION,
        payload: zip
    };
};

export const changeAge = (age) => {
    return {
        type: CHANGE_AGE,
        payload: age
    };
};
