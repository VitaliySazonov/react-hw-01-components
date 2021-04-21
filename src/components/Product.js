import React from "react"
import PropTypes from "prop-types"


let Product = ({imgUrl, name, price, qty = 0}) => {
  return (
    <>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>Price {price}$</p>
      <p>Quantity: {qty}</p>
      <button type="button">Add to card</button>
    </>
  );
};


// DefaultProps
Product.defaultProps = {
  imgUrl: 'https://i.pinimg.com/564x/79/32/fc/7932fc7a4ccdbad3932a3054762c336f.jpg',
  price: 0,
}


// PropTypes
Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product;