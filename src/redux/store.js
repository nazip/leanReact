import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import API from './middlewares/API';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducers, composeWithDevTools( 
    applyMiddleware(API)
));