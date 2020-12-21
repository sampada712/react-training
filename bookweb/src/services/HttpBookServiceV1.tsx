
import { Book } from "../model/Book";



export class HttpBookService { 

   
   private baseUrl='http://localhost:3000/api';

    

    // async getBooks():Promise<Book[]>{
        
    //     let url=`${this.baseUrl}/books.json`;

    //     //get the records...
    //     let response=await fetch(url);
    //     //console.log('response',response);
    //     //console.log('response.json()',response.json());
    //     let books=await response.json();
    //     console.log('books',books);
    //     return books.map((book:any)=>{            
    //         book.price=parseFloat(book.price);
    //         book.pages=parseInt(book.pages);
    //         book.rating=parseFloat(book.rating);
    //         book.releaseDate=new Date(book.releaseDate);
    //         book.votes=parseInt(book.votes);
    //         return book;
    //     });
    // }


    async getBooks():Promise<Book[]>{
        
        let url=`${this.baseUrl}/books.json`;

        //get the records...
        return fetch(url)    //A promise to return HTTPResponse
                .then(response=>response.json())   //A Promise return JSON Data
                .then(books=>books.map((book:any)=>{    //A promise to transform the received data
                    book.price=parseFloat(book.price);
                    book.pages=parseInt(book.pages);
                    book.rating=parseFloat(book.rating);
                    book.releaseDate=new Date(book.releaseDate);
                    book.votes=parseInt(book.votes);
                    return book;
                }));

    }


    // async getBookByIsbn(isbn: string): Promise<Book|undefined> {
    //     //await delay(1000);
    //     //return this.books.find(b=> b.isbn===isbn);
        
    // }

    // async addBook(book: Book): Promise<Book|undefined> {
    //     //await delay(1000);
    //     this.books.push(book);
        
    // }

}