import { PETFINDER_API_KEY } from 'react-native-dotenv';
import {
    FOUND_DOGS,
    FINDING_DOGS,
    LAST_OFFSET,
    ERROR
} from './types';

export const findDogs = () => {
    return (dispatch, getState) => {
        const cardDetails = {
            key: PETFINDER_API_KEY,
            location: getState().settings.location,
            format: 'json',
            animal: 'dog',
            count: 500,
            offset: getState().findDogsReducer.lastOffset,
        };

        if (getState().settings.size !== 'any') {
            cardDetails.size = getState().settings.size;
        }
        if (getState().settings.gender !== 'either') {
            cardDetails.sex = getState().settings.gender;
        }
        if (getState().settings.age !== 'any') {
            cardDetails.age = getState().settings.age;
        }

        let formBody = [];
        for (const property in cardDetails) { // eslint-disable-line
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(cardDetails[property]);
            formBody.push(`${encodedKey}=${encodedValue}`);
        }
        formBody = formBody.join("&");

        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        };
        dispatch({
            type: FINDING_DOGS,
            payload: true
        });
        console.log(options);
        fetch('http://api.petfinder.com/pet.find', options) // eslint-disable-line no-undef
            .then((response) => response.json())
            .then((response) => {
              if(Number(response.petfinder.header.status.code.$t) !== 100) {
                console.log(response);
                throw response.petfinder.header.status.message.$t;
              }
              return response;
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: LAST_OFFSET,
                    payload: response.petfinder.lastOffset.$t
                });
                return response;
            })
            .then((response) => {
                return response.petfinder.pets.pet.filter((pet) => {
                    const { gender, size, age, selectedBreeds } = getState().settings;
                    return pet.media.hasOwnProperty('photos') &&
                        (selectedBreeds > 248 || Object.values(pet.breeds.breed).filter(val => !selectedBreeds.includes(val)).length < 1) &&
                        (gender === 'either' || !pet.sex.hasOwnProperty('$t') || pet.sex.$t === gender) &&
                        (size === 'any' || !pet.size.hasOwnProperty('$t') || pet.size.$t === size) &&
                        (age === 'any' || !pet.age.hasOwnProperty('$t') || pet.age.$t === age) &&
                        (getState().dogs.blacklist.indexOf(pet.id.$t) === -1);
                });
            })
            .then((response) => {
                //send last offset
                console.log(response);
                dispatch({
                    type: FINDING_DOGS,
                    payload: false
                });
                dispatch({
                    type: FOUND_DOGS,
                    payload: response
                });
            })
            .catch((error) => {
                console.log(`find dog error: ${error}`);
                if(error === 'number of results would exceed per-search limit') {
                  dispatch({
                    type: ERROR,
                    payload: 'Please change filters, there are no found dogs like this in your area.'
                  }); 
                } else {
                  dispatch({
                    type: ERROR,
                    payload: error
                  });
                }
                dispatch({
                    type: FOUND_DOGS,
                    payload: []
                });
                dispatch({
                    type: FINDING_DOGS,
                    payload: false
                });
            });
    };
};

// export const findDogById = (id) => {
//     return (dispatch) => {
//         const cardDetails = {
//             'key': '942708910a455c2a12f41399e343ffb3',
//             'format': 'json',
//             'id': id
//         };
//         console.log(id);
//         let formBody = [];
//         for (const property in cardDetails) { // eslint-disable-line
//             const encodedKey = encodeURIComponent(property);
//             const encodedValue = encodeURIComponent(cardDetails[property]);
//             formBody.push(`${encodedKey}=${encodedValue}`);
//         }
//         formBody = formBody.join("&");
//         const options = {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: formBody
//         };
//         dispatch({
//             type: FINDING_DOGS,
//             payload: true
//         });
//         fetch('http://api.petfinder.com/pet.get', options) // eslint-disable-line no-undef
//      //s       .then((response) => response.json())
//             .then((response) => {
//                 console.log(response);
//                 dispatch({
//                     type: FINDING_DOGS,
//                     payload: false
//                 });
//                 dispatch({
//                     type: SHOW_DOG,
//                     payload: response.petfinder
//                 });
//             })
//             .catch((error) => {
//                 if (error) {
//                 console.log(`find dog error: ${error}`);
//                 dispatch({
//                     type: FINDING_DOGS,
//                     payload: false
//                 });
//                 }
//             });
//     };
// };
