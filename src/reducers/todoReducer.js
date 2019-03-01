import {ADD_TODO,REMOVE_TODO,GET_BY_ID, UPDATE, UPDATE_COMPLETED, DELETE_DONE_TASKS } from '../actions/actionTypes'

const initialState = {
    items : []
};

function todo(state = initialState, action){
    switch (action.type){
        case ADD_TODO: {
            console.log(state);
            console.log(action.payload);
           if(Array.isArray(action.payload)) {
               return {
                   ...state,
                   items: [...action.payload]
               }
           }else{
               return {
                   ...state,
                   items: [...state.items , action.payload]
               }
           }
        }
        case REMOVE_TODO:
            let arrAfterRemove = [...state.items];
            console.log(action);
            state.items.forEach(item=> {
                if(item.id===action.elementId){
                    arrAfterRemove.splice(action.key,1)
                }
            });
            console.log(arrAfterRemove);
            return {
                ...state,
                items: arrAfterRemove
            };
        case GET_BY_ID:
            console.log(action.element,'asdasdas');
            return {
                ...state,
                element: action.element
        };
        case UPDATE:
            action.element.title = action.text;
            state.items.forEach(item => {
                if(item.id === action.element.elementId)item.title = action.text;
            });
            return {
                ...state
            };
        case UPDATE_COMPLETED:
            console.log(action);
            state.items.forEach(item => {
                if(item.id === action.elementId)item.completed = action.completed;
            });
            console.log(state.items);
            return {
                ...state,
                items: [...state.items]
            };
        case DELETE_DONE_TASKS:
            state.items = state.items.filter(item => !item.completed);
            return {
                ...state,
                items: [...state.items]
            };
        default: return state;
    }
}

export default todo;