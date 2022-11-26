import Shelf from "./Shelf";
import PropTypes from "prop-types";
const Books = ({ book, updateBookShelf }) => {
  const ImageLink = book.imageLinks ? book.imageLinks.thumbnail : "";
  const shelf = book.shelf ? book.shelf : "none ";
  const handleShelfChange = (event) => {
    updateBookShelf(book, event.target.value);
  };

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${ImageLink})`,
            }}
          >
            <Shelf
              shelf={shelf}
              books={book}
              updateBookShelf={handleShelfChange}
            />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Books;
