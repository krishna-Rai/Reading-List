import React, { createContext,useReducer,useEffect } from "react";
import { bookReduce } from "../reducers/BookReducer";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {
  // const [books, setBooks] = useState([
  //   {
  //     id: uuidv4(),
  //     title: "Theory of everthing",
  //     author: "Stephen Hawking",
  //   },
  // ]);

  
  const [books, dispatch] = useReducer(bookReduce, [], ()=>{
    const books = localStorage.getItem('books')
    return books?JSON.parse(books):[]
  })

  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books))
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks((books) => [...books, { id: uuidv4(), title, author }]);
  // };
  // const removeBook = (id) => {
  //   setBooks((books) => {
  //     return books.filter((book) => book.id !== id);
  //   });
  // };
  return (
    <BooksContext.Provider value={{books, dispatch}}>
      {children}
    </BooksContext.Provider>
  );
}
