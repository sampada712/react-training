import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../model/Book';
import { HttpBookService } from '../services/HttpBookService';
import { delay } from '../services/utils';
import {connect} from 'react-redux';
import {getAllBooks} from '../redux/features/books/actions';



interface BookListProps{
    books:Book[],
    getAllBooks:()=>void;
}

class _BookList extends React.Component<BookListProps> {

    componentDidMount(){
        this.props.getAllBooks();
    }

    render(){

        if(this.props.books.length===0){
            return <img src='/images/loading.gif' alt='loading'/>
        }

        return (
            <div>
                <h1>Book List</h1>
                <table className='table table-responsive table-hover table-stripes' >
                    <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            this.props.books.map( book=>(
                                <tr key={book.isbn}>
                                    <td><img src={`/images/books/${book.isbn}.jpg`} width='50' alt={book.title}/></td>
                                    <td><Link to={`/book/${book.isbn}`}  >{book.title}</Link> </td>
                                    <td>{book.author}</td>
                                    <td>{book.rating}</td>
                                </tr>
                            ))
                        }    
                    </tbody>
    
                </table>
            </div>
        );
    }
}

//connect any react component to redux 

//step1 create a property that maps redux state to a react property

const mapStateToProps = (reduxState:any)=> {

    //this object will becom a prop for my component
    return {
        books:reduxState.books
    };
}

//Step 2 define any action creator you want to call and dispatch

let actionsToBeDispatched={
    getAllBooks
}


//step 3  connect redux with react
// it will 
//      copy redux state to props 
//      subscribe to redux store for changes
//      props are updated once redux state changes

let reduxWrapper =connect(mapStateToProps,actionsToBeDispatched);

export const  BookList= reduxWrapper( _BookList);