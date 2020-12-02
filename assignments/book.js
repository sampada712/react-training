

class Book{

    constructor(title,author, price, rating){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    static show(book){
        console.log('book',book);
        
    }
}

class BookManager{

    constructor(){
        this.books=[
            new Book("The Accursed God","Vivek Dutta Mishra",299, 4.3),
            new Book("The Brethren","John Grisham",150, 4),
            new Book("Sons of Fortune","Jeffrey Archer",350, 4.8),
            new Book("Summons","John Grisham",200, 3.9),
        ]
    }

    getAll(){
        return this.books;
    }

    getBooksByAuthor(author){
        let result = [];
        for(let b of this.books){
            if(b.author===author){
                result.push(b);
            }
        }
        return result;
    }

    getBooksInPriceRange(min,max){
        let result = [];
        for(let b of this.books){
            if(b.price<=max && b.price>=min){
                result.push(b);
            }
        }
        return result;
    }

    getBooksInRatingRange(min,max){
        let result = [];
        for(let b of this.books){
            if(b.rating<=max && b.rating>=min){
                result.push(b);
            }
        }
        return result;
    }

    search(text){
        let result = [];
        for(let b of this.books){
            if(b.title.search(text)){
                result.push(b);
            }
        }
        return result;
    }
}


function showBooks(books,message=''){
    console.log(message);
    console.log('price\trating\tauthor\ttitle');
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

}


let manager=new BookManager();
showBooks(manager.getAll(), "All Books");
showBooks(manager.getBooksByAuthor("John Grisham"),"Books by John Grisham");
showBooks(manager.getBooksInRatingRange(4.5,5),"Books by Rating range(4.5,5)");
showBooks(manager.getBooksInPriceRange(50,200),"Books by Price range(50,200)");
showBooks(manager.search('God'),"Books by keyword God");

