import React,{useContext} from 'react'
import { BooksContext } from '../contexts/BooksContextProvider'

export default function Navbar() {

    const {books} = useContext(BooksContext)
    return (
        <div className="navbar">
            <h1>Krishna's Reading List</h1>
            <p>Currently you have {books.length} to read ...</p>
        </div>
    )
}
