import { FOUND_DOGS, FINDING_DOGS, SHOW_DOG, LAST_OFFSET, ERROR } from '../actions/types';

const INITIAL_STATE = {
    dogs: [],
    findingDogs: true,
    lastOffset: 0,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOUND_DOGS:
            return { ...state,
                dogs: action.payload
            };
        case FINDING_DOGS: 
            return { ...state,
                findingDogs: action.payload
            };
        case SHOW_DOG:
        console.log(action.payload);
            return state;
        case LAST_OFFSET:
            return { ...state, lastOffset: action.payload };
        case ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
