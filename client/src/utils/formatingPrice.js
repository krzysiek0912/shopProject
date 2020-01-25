const formatPrice = price => {
  return price
    .toFixed(2) // always two decimal digits
    .replace('.', ','); // replace decimal point character with ,
};

export default formatPrice;
