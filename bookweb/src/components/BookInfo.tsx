import React from 'react';
import { Book } from '../model/Book';

interface BookProps {
    book?: Book | null;
}


export const BookInfo = ({ book }: BookProps) => {



    return (
        <div>
            {book ? (
                <div className='container'>
                    <h2>{book.title}</h2>
                    <div className='row'>
                        <div className='col col-6'>
                            <ul>
                                <li>Author {book.author}</li>
                                <li>Price  {book.price}</li>
                                <li>Rating {book.rating}</li>
                            </ul>
                        </div>
                        <div className='col col-6'>
                            <img src={book.cover} width='150' alt={book.title} />
                        </div>
                    </div>
                    <div className='row'>
                        {book.description}
                    </div>
                    <div className='tags'>
                        <ul>
                            {book.tags.map((tag,i)=><li key={i}>{tag}</li>) }
                        </ul>
                    </div>
                    
                </div>
            ) : (
                    <div className='container'>
                        <h2>Please Select your book</h2>                        
                    </div>
                )}



        </div>);
};


//export BookDetails;