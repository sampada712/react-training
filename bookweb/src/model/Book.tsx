
export interface Book{
    _id?:string;
    id?:string;
    isbn:string;
    title:string;
    author:string;
    pages:number|string;
    price:number|string;
    rating:number|string;
    votes:number|string;
    description:string;
    tags:string[];
    series?:string;
    seriesIndex?:number|string;
    releaseDate?:Date|string;
    cover:string;
}