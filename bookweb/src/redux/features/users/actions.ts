import {User,UserService} from '../../../model/User';

export const ACTION_LOGIN='ACTION_LOGIN';
export const ACTION_LOGIN_PENDING='ACTION_LOGIN_PENDING';
export const ACTION_LOGIN_RESOLVED='ACTION_LOGIN_RESOLVED';
export const ACTION_LOGIN_REJECTED='ACTION_LOGIN_REJECTED';



export const ACTION_LOGOUT='ACTION_LOGOUT';
export const ACTION_LOGOUT_PENDING='ACTION_LOGOUT_PENDING';
export const ACTION_LOGOUT_RESOLVED='ACTION_LOGOUT_RESOLVED';
export const ACTION_LOGOUT_REJECTED='ACTION_LOGOUT_REJECTED';


export const ACTION_CHECK_LOGIN='ACTION_CHECK_LOGIN';
export const ACTION_CHECK_LOGIN_PENDING='ACTION_CHECK_LOGIN_PENDING';
export const ACTION_CHECK_LOGIN_RESOLVED='ACTION_CHECK_LOGIN_RESOLVED';
export const ACTION_CHECK_LOGIN_REJECTED='ACTION_CHECK_LOGIN_REJECTED';

let service=new UserService();

export const login=(username:string,password:string)=>{    
    return {
        type:ACTION_LOGIN,
        payload: service.login(username,password)
    };
}

export const checkLogin=()=>{
    return {
        type:ACTION_CHECK_LOGIN,
        payload: service.currentUser()
    }
}


export const logout=()=>{    
    return {type: ACTION_LOGOUT, payload:service.logout()};
}