import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './reducers';

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;