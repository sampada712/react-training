import axios from 'axios';
import { delay } from '../services/utils';

export interface User{
    id?:number|string, 
    name:string;
    password:string;
}


export class UserService{
    private baseUrl='http://localhost:4000/users';

    async login(userName:string, password:string):Promise<any>{
        
        let response=await axios.get(`${this.baseUrl}?name=${userName}`);
        let user=response.data;
        if(user.password===password){
            localStorage.setItem("user",user.username);
            return user.name;
        }
        else
            throw new Error('Invalid Credentials');
    }

    async logout(){
        await delay(1000);
        localStorage.removeItem("user");
    }

    async currentUser(){
        await delay(1000);
        let user=localStorage.getItem("user");
        return user;
    }

}