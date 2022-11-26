import React from "react";
import PropTypes from "prop-types";
const Shelf = ({ updateBookShelf, books }) => {
  return (
    <div className='book-shelf-changer'>
      <select
        onChange={updateBookShelf}
        value={books.shelf ? books.shelf : "none"}
      >
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};
Shelf.protoType = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Shelf;
