import React, { Component } from 'react'
import { Book } from '../model/Book';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HttpBookService } from '../services/HttpBookService';
//import { LocalBookService } from '../services/LocalBookService';
import { BookManager } from './BookManager';

import { Footer } from './Footer';
import { Header } from './Header';
import { BookList } from './BookList';
import { BookEditor } from './BookEditor';
import { UserLogin } from './UseLogin';
import { UserRegistration } from './UserRegistration';
import { NotFound } from './NotFound';
import {BookDetails} from './BookDetails';

interface BMSAppProps {

};

interface BMSAppState {
    books: Book[];
    loading: boolean;
}

export default class BMSApp extends Component<BMSAppProps, BMSAppState>{

    private service: HttpBookService;

    constructor(props: BMSAppProps) {
        super(props);

        this.service = new HttpBookService();

        //constructor shouldn't call async functions or fetch data
        this.state = {
            books: [],
            loading: false
        };

    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header title='Books Web' />
                    <div className='container'>

                        <Switch>
                            <Route exact path='/' component={BookList} />
                            <Route path='/books/add' component={BookEditor} />
                            <Route path='/books/manager' component={BookManager} />
                            <Route path='/books/:isbn' component={BookDetails}/>
                            <Route path='/user/signin' component={UserLogin} />
                            <Route path='/user/signup' component={UserRegistration} />
                            <Route path='**' component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>

        );
    }
}
