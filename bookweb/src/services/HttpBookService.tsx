
import Axios from "axios";
import { Book } from "../model/Book";

export class HttpBookService { 

   private baseUrl='http://localhost:3000/api';

    async getBooks():Promise<Book[]>{
        let url=`${this.baseUrl}/books.json`;
        let response = await Axios.get<Book[]>(url);
        return response.data;
    }

    async getBookByIsbn(isbn: string): Promise<Book|undefined> {
        let url=`${this.baseUrl}/books/${isbn}.json`;
        let response = await Axios.get<Book>(url)
        return response.data;
    }

    // async addBook(book: Book): Promise<Book|undefined> {
    //     //await delay(1000);
    //     this.books.push(book);
        
    // }

}