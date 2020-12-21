import React from 'react';
import { Book } from '../model/Book';
import { BookInfo } from './BookInfo';

interface BookManagerProps {
    books: Book[];
}

interface BookTitleListProps{
    books: Book[];
    onSelect: (book:Book)=>void;
    selectedBook:Book|null;
}

const BookTitleList = ({ books,onSelect,selectedBook }: BookTitleListProps) => {

    

    return (
        <div className="list-group">
            {
                books.map(book=>(
                    <a  key={book.isbn} onClick={()=>onSelect(book)}  
                    className={`list-group-item list-group-item-action  `}
                    style={{backgroundColor: book===selectedBook?'red':'transparent'}}
                    > {book.title} </a>
                ))
            }                        
        </div>
    )
}


interface BookManagerState{
    selectedBook:Book|null;
}
export class BookManager extends React.Component<BookManagerProps,BookManagerState>{

    state={
        selectedBook:null
    }

    selectBook=(book:Book)=> this.setState({selectedBook:book})
    

    render=() => {
        return (
            <div className='container'>
                <h1>Book Manager</h1>
                <div className='row'>
                    <div className='col col-4'>
                       <BookTitleList books={this.props.books} selectedBook={this.state.selectedBook} onSelect={this.selectBook} />
                    </div>
                    <div className='col col-8'>
                        <BookInfo book={this.state.selectedBook} />
                    </div>
                </div>
            </div>
        )
    }

} 