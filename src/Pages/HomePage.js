import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";
import PropTypes from "prop-types";
import React from "react";

const HomePage = ({ books, updateBookShelf }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>My Reads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <BooksShelf
            shelfName='Currently Reading'
            shelf='currentlyReading'
            books={books}
            updateBookShelf={updateBookShelf}
          />
          <BooksShelf
            shelfName='want to Read'
            books={books}
            updateBookShelf={updateBookShelf}
            shelf='wantToRead'
          />
          <BooksShelf
            shelfName='Read'
            books={books}
            updateBookShelf={updateBookShelf}
            shelf='read'
          />
          <div className='open-search'>
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default HomePage;
