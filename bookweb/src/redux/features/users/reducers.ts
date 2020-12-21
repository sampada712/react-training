
import * as ACTIONS from './actions';

interface Action{
    type:string,
    payload?:any;
}

export const currentUserReducer=(initialState:string|null=null,action:Action)=>{

    switch(action.type){
        case ACTIONS.ACTION_LOGIN_RESOLVED:
            return action.payload;
        case ACTIONS.ACTION_LOGIN_REJECTED:
            return null;
        case ACTIONS.ACTION_LOGOUT_RESOLVED:
            return null;
        case ACTIONS.ACTION_CHECK_LOGIN_RESOLVED:
            return action.payload;
        default:
            return initialState; //return same object you received. this tells redux reducer has not changed anything
    }
}
