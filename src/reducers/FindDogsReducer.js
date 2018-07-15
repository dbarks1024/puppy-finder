import { FOUND_DOGS, FINDING_DOGS } from '../actions/types';

const INITIAL_STATE = {
    dogs: '',
    findingDogs: true
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FOUND_DOGS:
            return { ...state,
                dogs: action.payload
            };
        case FINDING_DOGS:
            return { ...state,
                findingDogs: action.payload
            };
        default:
            return state;
    }
};
