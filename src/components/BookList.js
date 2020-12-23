import React,{useContext} from 'react'
import BookDetails from './BookDetails'
import { BooksContext } from '../contexts/BooksContextProvider'

export default function BookList() {

    const {books} = useContext(BooksContext)
    
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book)=>{
                    return (<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            No Books to Read. Hello Free Time :)
        </div>
    )
}
