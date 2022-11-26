import Books from "./Books";
import PropTypes from "prop-types";
const BooksShelf = ({ shelfName, books, shelf, updateBookShelf }) => {
  const Selfs = books.filter((book) => book.shelf === shelf);

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfName}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {Selfs.map((book) => (
            <Books
              shelf={shelf}
              key={book.id}
              updateBookShelf={updateBookShelf}
              book={book}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
BooksShelf.protoType = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BooksShelf;
