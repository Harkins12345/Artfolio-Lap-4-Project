const initState = {username: null, error: false};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload }
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    };
};

export default userReducer;