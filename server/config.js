require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8000,
  DB: process.env.DB,
  DOTPAY_PIN: process.env.DOTPAY_PIN,
  DOTPAY_ID: process.env.DOTPAY_ID,
};
