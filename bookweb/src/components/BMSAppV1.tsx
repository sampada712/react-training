import React, { Component } from 'react'
import { Book } from '../model/Book';
import { HttpBookService } from '../services/HttpBookService';
//import { LocalBookService } from '../services/LocalBookService';
import { BookManager } from './BookManager';

import { Footer } from './Footer';
import { Header } from './Header';


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

    loadBooks = async () => {
        this.setState({loading:true})
        let books = await this.service.getBooks();
        this.setState({ books,loading:false });
    }

    // componentDidMount=  ()=>{
    //     this.setState({loading:true});
    //     this.service.getBooks()
    //         .then(books=>this.setState({books,loading:false}));
    // }

    render() {

        const renderBody = () => {
            if (this.state.loading)
                return <img src='/images/loading.gif' alt='loading...'/>
            else if (this.state.books.length === 0)
                return (
                    <div className='container'>
                        <button onClick={this.loadBooks} className='btn btn-primary' >Load Books</button>
                    </div>)
            else 
                    return <BookManager books = {this.state.books} />;
                

        };

        return (
            <div className='App'>
                <Header title='Books Web' />
                <div className='container'>
                  
                  {renderBody()}

                </div>
                <Footer />
            </div>

        );
    }
}
