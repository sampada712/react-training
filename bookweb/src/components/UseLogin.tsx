import React,{useState} from 'react';
import { Book } from '../model/Book';

interface UserLoginProps{
    
}


 const _component=()=>{

   let [user,setUser]=useState({username:'',password:''});

    const  onSubmit=(e:any)=>{
        e.preventDefault();
        console.log('we got', user);
    }

    const onChange=(e:any)=>{
        console.log(e.target.id, e.target.value);
        let newUser:any={...user};
        newUser[e.target.id]=e.target.value;
        setUser(newUser);
    }
    

    return (
        <div>
            <h1>User Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text" id="username" 
                onChange={onChange}
                value={user.username} 
                placeholder="username" /><br/>
                <input type="password" placeholder="password"  
                id='password'
                onChange={onChange}
                value={user.password} /><br/>
                <input type="submit" value="Login" name='password' className="btn btn-primary"/>
            </form>
         </div>
    );
}

export const UserLogin=_component;