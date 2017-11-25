import {combineReducers} from 'redux'
import network from './network';
import nav from './nav';
import components from './components';
import auth from './auth';
import recipes from './recipes';


const rootReducer = combineReducers({
    nav,
    components,
    network,
    auth,
    recipes
});

export default rootReducer;