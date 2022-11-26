import { Link } from "react-router-dom";
import Books from "../components/Books";
import * as BooksAPI from "../BooksAPI";
import { DebounceInput } from "react-debounce-input";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchPage = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [booksResults, setResults] = useState([]);
  const updateQuery = (query) => {
    setQuery(query);
    if (query === "") return setResults([]);
    const searchBooks = async () => {
      const res = await BooksAPI.search(query);
      setResults(res);
    };
    searchBooks();
  };

  if (booksResults.length > 0) {
    for (let i = 0; i < booksResults.length; i++) {
      for (let x = 0; x < books.length; x++) {
        if (booksResults[i].id === books[x].id) {
          const booksIndex = books.findIndex(
            (book) => book.id === booksResults[i].id
          );
          booksResults[i].shelf = books[booksIndex].shelf;
        }
      }
    }
  }
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <DebounceInput
            minLength={1}
            value={query}
            debounceTimeout={300}
            onChange={(event) => updateQuery(event.target.value)}
            type='text'
            placeholder='Search by title, author, or ISBN'
          />
        </div>
      </div>
      <div className='search-books-results'></div>
      <ol className='books-grid'>
        {Array.isArray(booksResults) &&
          booksResults.map((book) => (
            <Books
              books={books}
              key={book.id}
              book={book}
              updateBookShelf={updateBookShelf}
            />
          ))}
      </ol>
    </div>
  );
};
SearchPage.protoType = {
  books: PropTypes.array.isRequired,
  booksResults: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchPage;
