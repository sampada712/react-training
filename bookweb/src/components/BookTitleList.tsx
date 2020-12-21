import React from 'react';
import { Book } from '../model/Book';


interface BookTitleListProps {
    books: Book[];
    onSelect: (book: Book) => void;
    selectedBook: Book | null;
}

export const BookTitleList = ({ books, onSelect, selectedBook }: BookTitleListProps) => {
    return (
        <div className="list-group">
            {
                books.map(book => (
                    <a key={book.isbn} onClick={() => onSelect(book)}
                        className={`list-group-item list-group-item-action  `}
                        style={{ backgroundColor: book === selectedBook ? 'red' : 'transparent' }}
                    > {book.title} </a>
                ))
            }
        </div>
    )
}