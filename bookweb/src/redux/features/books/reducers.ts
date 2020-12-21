import { Book } from '../../../model/Book';
import * as ACTIONS from './actions';

interface Action{
    type:string,
    payload?:any;
}

export const booksReducer=(initialState:Book[]=[],action:Action)=>{

    switch(action.type){
        case ACTIONS.ACTION_BOOKS_GET_ALL:
            return [...action.payload]; //return all book as a new immutable array
        case ACTIONS.ACTION_BOOKS_ADD: //I will get a new book to add in my existing list
            return [...initialState, action.payload];
        default:
            return initialState; //return same object you received. this tells redux reducer has not changed anything
    }
}

export const selectedBookReducer=(initialState:Book|null=null,action:Action)=>{

    switch(action.type){
        case ACTIONS.ACTION_BOOK_GET_BY_ISBN:
            return action.payload
        case ACTIONS.ACTION_BOOKS_ADD: //A new book automatically gets selected
            return action.payload;
        default:
            return initialState; //return same object you received. this tells redux reducer has not changed anything
    }
}
