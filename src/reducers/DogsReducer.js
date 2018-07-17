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
            console.log(action.payload);
            if (Array.isArray(action.payload.breeds.breed)) {
                for (let i = 0; i < action.payload.breeds.breed.length; i++) {
                    breedString += `${action.payload.breeds.breed[i].$t}, `;
                }
            } else {
                breedString = action.payload.breeds.breed.$t;
            }
            return { ...state,
                myDogs: [...state.myDogs, {
                    name: action.payload.name.$t,
                    photos: action.payload.media.photos.photo,
                    id: action.payload.id.$t,
                    breed: breedString.slice(0, -2),
                    options: action.payload.options.option,
                    sex: action.payload.sex.$t,
                    shelterId: action.payload.shelterId.$t,
                    size: action.payload.size.$t,
                    status: action.payload.status.$t,
                    lastUpdate: action.payload.lastUpdate.$t,
                    age: action.payload.age.$t,
                    contact: action.payload.contact,
                    description: action.payload.description.$t,
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
