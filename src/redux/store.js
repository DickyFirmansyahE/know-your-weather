import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
