import { Book } from "../model/Book";

export interface BookService{

    getAllBooks():Promise<Book[]>;

    getBookByIsbn(isbn:string): Promise<Book|undefined>;

    addBook(book:Book):Promise<Book>;
}