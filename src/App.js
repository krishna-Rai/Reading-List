import React from 'react'
import BooksContextProvider from './contexts/BooksContextProvider'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

function App() {
  return (
    <BooksContextProvider>
      <Navbar/>
      <BookList/>
      <BookForm/>
    </BooksContextProvider>
  );
}

export default App;
