import {
    ADD_DOG,
    REMOVE_DOG
} from '../actions/types';

const INITIAL_STATE = {
    myDogs: [],
    rejectedDogs: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DOG:
            state.myDogs.push({
                name: action.payload.name.$t,
                photo: action.payload.media.photos.photo[1].$t,
                id: action.payload.id.$t
            });
            return { ...state,
                myDogs: state.myDogs
            };
        case REMOVE_DOG:
            return {
                state
            };
        default:
            return state;
    }
};
