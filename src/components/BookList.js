import React from 'react'
import PropTypes from 'prop-types'



let BookList = ({books}) => {
  return (
    <>
      <h1>Collection</h1>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>{book.name}</li>
          )
        })}
      </ul>
    </>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

export default BookList