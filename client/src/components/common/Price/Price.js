import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ currency, price }) => {
  const priceOutput =
    currency.currencySite === 'right'
      ? `${price} ${currency.humanCode}`
      : `${currency.humanCode} ${price}`;
  return <>{priceOutput}</>;
};
Price.propTypes = {
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  price: PropTypes.string.isRequired,
};
export default Price;
