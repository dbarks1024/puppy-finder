import {
    FOUND_DOGS,
    FINDING_DOGS,
    LAST_OFFSET
} from './types';

export const findDogs = () => {
    return (dispatch, getState) => {
        const cardDetails = {
            'key': '942708910a455c2a12f41399e343ffb3',
            'location': 30189,
            'format': 'json',
            'animal': 'dog',
            'count': 500,
            'lastOffset': getState().findDogsReducer.lastOffset,
        };
       
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
        fetch('http://api.petfinder.com/pet.find', options) // eslint-disable-line no-undef
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                dispatch({
                    type: LAST_OFFSET,
                    payload: response.petfinder.lastOffset.$t
                });
                return response;
            })
            .then((response) => {
                const selectedBreeds = getState().settings.selectedBreeds;
                console.log(selectedBreeds);
                const filteredPets = response.petfinder.pets.pet.filter((pet) => {
                    // not working
                    const compareArray = Object.values(pet.breeds.breed).filter(val => !selectedBreeds.includes(val));                    
                    return getState().dogs.blacklist.indexOf(pet.id.$t) === -1 &&
                            pet.media.hasOwnProperty('photos') &&
                            compareArray.length < 1; 
                });
                return { ...response, petfinder: { pets: filteredPets } };
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
                    payload: response.petfinder.pets
                });
            })
            .catch((error) => {
                console.log(`find dog error: ${error}`);
                dispatch({
                    type: FOUND_DOGS,
                    payload: undefined
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
