const express = require('express');

const router = express.Router();
const PaymentController = require('../controllers/payment.controller');

// get all products
router.route('/chk').get(PaymentController.getPaymentChk);

module.exports = router;
