export const findDogs = () => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            key: "942708910a455c2a12f41399e343ffb3",
            format: "json",
            location: "30189"
        })
    };
    return (dispatch) => {
        fetch('http://api.petfinder.com/pet.find', options)
            .then((response) => console.log(response))
            .then(() => {
                dispatch({
                    type: 'test'
                });
            })
            .catch((error) => console.log(error));
    };
};
