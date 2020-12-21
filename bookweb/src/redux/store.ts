
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { booksReducer,selectedBookReducer } from './features/books/reducers';
import {currentUserReducer} from './features/users/reducers';

//store is a single object with key and value 
//each key is assigned a reducer

interface Action{
    type:string;
    payload?:any;
}

//i will work only if payload is a promise
const promiseHandler= (store:any)=>(next:any)=>(action:Action)=>{
    console.log('promiseHandler intercepted', action.type);

    //if current action is a promise
    if(action.payload && action.payload.next 
        && typeof(action.payload.next)==='function' 
        && action.payload.catch && typeof(action.payload.catch)==='function'){

        console.log('handling the promise');

        store.dispatch({type:`${action.type}_PENDING`}); //send a message that we are resolving the current requests

        action
            .payload
            .then((result:any)=> store.dispatch({type:`${action.type}_RESOLVED`, payload:result}))
            .catch((error:any)=>store.dispatch({type:`${action.type}_REJECTED`,payload:error}));
    } else{
        console.log('skipping current action',action.type);
        next(action);
    }
}

const reducers= combineReducers({
    books:booksReducer,
    selectedBook:selectedBookReducer,
    currentUser:currentUserReducer
});

export const store= createStore(reducers,applyMiddleware(promiseHandler));