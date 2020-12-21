import React, {useState} from 'react';
import { Book } from '../model/Book';
import { BookInfo } from './BookInfo';
import { BookTitleList } from './BookTitleList';

interface BookManagerProps {
    books: Book[];
}

export const BookManager = ({books}: BookManagerProps) => {

    //I am maintaing state for a Book object
    //the state will be available under name selectedBook
    //state can be modified using setSelectedBook
    let [selectedBook, setSelectedBook] = useState<Book|null>(null);

    const selectBook = (book: Book) => setSelectedBook(book);

    return (
        <div className='container'>
            <h1>Book Manager</h1>
            <div className='row'>
                <div className='col col-4'>
                    <BookTitleList books={books} selectedBook={selectedBook} onSelect={selectBook} />
                </div>
                <div className='col col-8'>
                    <BookInfo book={selectedBook} />
                </div>
            </div>
        </div>
    );
}

