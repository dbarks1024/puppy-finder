import { FOUND_DOGS } from '../actions/types';

const INITIAL_STATE = {
    dogs: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FOUND_DOGS:
            return { ...state,
                dogs: action.payload
            };
        default:
            return state;
    }
};
