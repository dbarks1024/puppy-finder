import { UPDATE_BREEDS, ADD_ALL_BREEDS, CLEAR_BREEDS, CHANGE_SIZE, CHANGE_GENDER, CHANGE_LOCATION, CHANGE_AGE, SEARCH_BREEDS } from './types';

export const updateBreeds = (breedName) => {
    return {
        type: UPDATE_BREEDS,
        payload: breedName
    };
};

export const addAllBreeds = () => {
    return {
      type: ADD_ALL_BREEDS,
      payload: true
    };
};

export const clearAllBreeds = () => {
    return {
        type: CLEAR_BREEDS,
        payload: []
    };
};

export const searchBreeds = (keyword) => {
  return {
      type: SEARCH_BREEDS,
      payload: keyword
  };
};

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
