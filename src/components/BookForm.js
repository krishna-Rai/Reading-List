import React,{useContext,useState} from 'react'
import { BooksContext } from '../contexts/BooksContextProvider'

export default function BookForm() {
    const {dispatch} = useContext(BooksContext)
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"add-book",payload:{title,author}})
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="book title" value={title} required/>
            <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="book author" value={author}/>
            <input type="submit" value="add book"/>
        </form>
    )
}
