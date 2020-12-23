import React,{useContext } from 'react'
import { BooksContext } from '../contexts/BooksContextProvider'

export default function BookDetails({book}) {
    const {dispatch} = useContext(BooksContext)
    return (
      <li onClick={()=>dispatch({type:"remove-book",payload:{id:book.id}})}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    );
}
