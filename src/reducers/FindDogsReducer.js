const INITIAL_STATE = {
    test: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'test':
            return { ...state,
                test: action.payload
            };
        default:
            return state;
    }
};
