import React,{useEffect} from 'react';
import {Book} from '../model/Book';

import { HttpBookService } from '../services/HttpBookService';
import { BookInfo } from './BookInfo';
import { NotFound } from './NotFound';
import {connect} from 'react-redux';
import {getBookByIsbn} from '../redux/features/books/actions';
import {useParams} from 'react-router-dom';

interface BookDetailsState{
    selectedBook?:Book|null;
    isbn:string|null;
    error?:any;
}

export class _BookDetails extends React.Component<any,BookDetailsState,BookDetailsState>{

    service= new HttpBookService();
    state={
        selectedBook:null,
        isbn:null,
        error:null
    }

    async componentDidMount(){

        try{
            console.log('params',this.props.match.params);
            let isbn=this.props.match.params.isbn;
            this.setState({isbn});
            let selectedBook=await this.service.getBookByIsbn(isbn);
            this.setState({selectedBook,error:null});
        } catch(error){
            this.setState({error,selectedBook:null})
        }

    }
    

    render(){
        if(this.state.error)
            return (<NotFound/>)
        if(!this.state.selectedBook)
            return (<img src='/images/loading.gif' alt='loading'/>)
        else
            return (<BookInfo book={this.state.selectedBook}/>)
    }

}

interface BookDetailsProps{
    selectedBook:Book|null;
    getBookByIsbn:(isbn:string)=>any;
}

const _component=(props:BookDetailsProps)=>{

        let {isbn}=useParams<any>();
        console.log('isbn',isbn);

        //this function is called after every render
        //it can be considered as replacement of
        //componentDidMount and componentDidUpdate
        //we can make async calls here and can change states here
        useEffect(()=>{
            props.getBookByIsbn(isbn);  
        })

        
        //you shouldn't make a request to redux Here
        //it is basically render function
        if(!props.selectedBook)
            return (<NotFound/>);
        else
            return (<BookInfo book={props.selectedBook}/>);
        

};

const mapStateToProps = ({selectedBook}:any)=> ({selectedBook});
const actions={getBookByIsbn}

export const BookDetails= connect(mapStateToProps,actions)(_component);