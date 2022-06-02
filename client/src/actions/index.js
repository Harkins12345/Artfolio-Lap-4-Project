const loadUsername = username => ({ type: 'SET_USERNAME', payload: username });

export const setUsername = username => {
    return async dispatch => {
        dispatch(loadUsername(username));
    };
};