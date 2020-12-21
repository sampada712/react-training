import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {logout} from '../redux/features/users/actions';




const _component = (props: any) => {

    

    if(props.currentUser)
        return (
            <ul className= "navbar-nav " >
                <li className="nav-item" >
                    {props.currentUser} 
                </li>
                <li className = "nav-item" >
                    <span onClick={props.logout} > Logout </span>
                </li>
            </ul>
        )
    else
        return  (
        <ul className= "navbar-nav " >
            <li className="nav-item" >
                <Link className="nav-link" to = "/user/signin" > Login </Link>
            </li>
            <li className = "nav-item" >
                <Link className="nav-link" to = "/user/signup" > Register </Link>
            </li>
        </ul>
    );
   

};

let props=(state:any)=>({currentUser:state.currentUser});
let actions={logout}

export const LoginInfo = connect(props,actions)(_component);