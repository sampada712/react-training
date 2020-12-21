import React from 'react';
import { Book } from '../model/Book';
import {useLocation} from 'react-router-dom';

interface UserLoginProps{
    
}


export const NotFound=()=>{

    let location=useLocation();

    let style={
        alignItems:'center center'
    }
    return (
        <div style={style}>
            <h1>Sorry! We Couldn't Find What you  are looking for</h1>
            <h2>{location.pathname}</h2>
            <img src='/images/404.png' alt='Not Found' height='300px'/>
         </div>
    )
}