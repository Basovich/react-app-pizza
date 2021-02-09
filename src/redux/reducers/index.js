import { combineReducers } from 'redux';
import {filters} from './filters';
import {pizzas} from './pizzas';
import {selectPizzaModal} from './selectPizzaModal';

const rootReducer = combineReducers({
    filters,
    pizzas,
    selectPizzaModal
});

export default rootReducer;