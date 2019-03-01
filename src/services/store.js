import {createStore} from 'redux';
import todo from '../reducers/todoReducer'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer =   combineReducers({
    todo,
    form: formReducer
});

const store = createStore(
    rootReducer
);

export default store;