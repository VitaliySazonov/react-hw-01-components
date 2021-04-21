import React from 'react'
import PropTypes from 'prop-types'

let Section = ({title, children}) => {
  return (
    <section>
      <h1>{title || 'No title'}</h1>
      {children}
    </section>
  )
}

// Section.defaultProps = {
//   title: 'No title!',
// }


// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
// }

export default Section
