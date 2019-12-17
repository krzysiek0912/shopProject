const NodeSha256 = require('js-sha256');
const config = require('../config');

// get Chk
exports.getPaymentChk = async (req, res) => {
  const options = req.query.options ? JSON.parse(req.query.options) : {};
  const {
    id,
    amount,
    currency,
    description,
    url,
    type,
    bylaw,
    personalData,
    ignoreLastPaymentChannel,
  } = options;

  const pin = config.DOTPAY_PIN;
  const chk = NodeSha256(
    `${pin}${id}${amount}${currency}${description}${url}${type}${bylaw}${personalData}${ignoreLastPaymentChannel}`,
  );
  try {
    res.status(200).json(chk);
  } catch (err) {
    res.status(500).json(err);
  }
};
