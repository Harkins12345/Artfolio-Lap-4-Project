const loadUsername = username => ({ type: 'SET_USERNAME', payload: username });
const loadSocket = socket => ({ type: 'SET_SOCKET_CONN', payload: socket });

export const setUsername = username => {
    return async dispatch => {
        dispatch(loadUsername(username));
    };
};

export const setSocket = socket => {
    return async dispatch => {
        dispatch(loadSocket(socket));
    };
};