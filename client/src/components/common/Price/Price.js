import React from 'react';
import PropTypes from 'prop-types';
import formatingPrice from 'utils/formatingPrice';

const Price = ({ currency, price }) => {
  const formatedPrice = formatingPrice(price);
  const priceOutput =
    currency.currencySite === 'right'
      ? `${formatedPrice} ${currency.humanCode}`
      : `${currency.humanCode} ${formatedPrice}`;
  return <>{priceOutput}</>;
};
Price.propTypes = {
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  price: PropTypes.number.isRequired,
};
export default Price;
