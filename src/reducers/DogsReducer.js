import {
    ADD_DOG,
    REMOVE_DOG
} from '../actions/types';

const INITIAL_STATE = {
    myDogs: [],
    rejectedDogs: []
};

export default (state = INITIAL_STATE, action) => {
    let breedString = '';
    switch (action.type) {
        case ADD_DOG:
            if (Array.isArray(action.payload.breeds.breed)) {
                for (let i = 0; i < action.payload.breeds.breed.length; i++) {
                    breedString += `${action.payload.breeds.breed[i].$t}, `;
                }
            } else {
                breedString = action.payload.breeds.breed.$t;
            }
            // state.myDogs.push({
            //     name: action.payload.name.$t,
            //     photo: action.payload.media.photos.photo[1].$t,
            //     id: action.payload.id.$t,
            //     breed: breedString.slice(0, -2)
            //});
            return { ...state,
                myDogs: [...state.myDogs, {
                    name: action.payload.name.$t,
                    photo: action.payload.media.photos.photo[1].$t,
                    id: action.payload.id.$t,
                    breed: breedString.slice(0, -2)
                }]
            };
        case REMOVE_DOG:
            return {
                state
            };
        default:
            return state;
    }
};
