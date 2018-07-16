import {
    FOUND_DOGS,
    FINDING_DOGS
} from './types';

export const findDogs = () => {
    const cardDetails = {
        'key': '942708910a455c2a12f41399e343ffb3',
        'location': 30189,
        'format': 'json',
        'animal': 'dog'
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
    return (dispatch) => {
        dispatch({
            type: FINDING_DOGS,
            payload: true
        });
        fetch('http://api.petfinder.com/pet.find', options) // eslint-disable-line no-undef
            .then((response) => response.json())
            .then((response) => {
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
                    type: FINDING_DOGS,
                    payload: false
                });
            });
    };
};
