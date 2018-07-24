import {
    FOUND_DOGS,
    FINDING_DOGS,
    LAST_OFFSET
} from './types';

export const findDogs = () => {
    return (dispatch, getState) => {
        const cardDetails = {
            key: '942708910a455c2a12f41399e343ffb3',
            location: getState().settings.location,
            format: 'json',
            animal: 'dog',
            count: 500,
            offset: getState().findDogsReducer.lastOffset,
        };
        
        if(getState().settings.size !== 'any') {
            cardDetails.size = getState().settings.size;
        }
        if(getState().settings.gender !== 'either') {
            cardDetails.sex = getState().settings.gender;
        }
        if(getState().settings.age !== 'any') {
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
                return response.petfinder.pets.pet.filter((pet) => {   
                    return pet.media.hasOwnProperty('photos');
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
