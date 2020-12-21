import React from 'react';
import {Link} from 'react-router-dom';
import { LoginInfo } from './LoginInfo';

export interface HeaderProps {
    title: String;
}
let style={
    backgroundColor:'red'
};
export const Header = ({title}: HeaderProps) => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={style}>
            <Link className="navbar-brand" to="/">
            <i className="fa fa-book"></i>{title}
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className="fa fa-list"></i>Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books/add"><i className="fa fa-plus"></i> Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books/manager"><i className="fa fa-edit"></i> Manage Book</Link>
                    </li>
                </ul>
                
                <LoginInfo/>
                
            </div>
        </nav>
    );
}




