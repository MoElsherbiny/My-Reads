import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import SearchPage from "./Pages/SearchPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const updateBookShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      book.shelf = shelf;
      setBooks(books.filter((bo) => bo.id !== book.id).concat([book]));
    };

    update();
  };

  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={<HomePage books={books} updateBookShelf={updateBookShelf} />}
        />
        <Route
          path='/search'
          element={
            <SearchPage updateBookShelf={updateBookShelf} books={books} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
