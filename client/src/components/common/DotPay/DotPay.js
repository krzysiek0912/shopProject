import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BASE_URL } from 'config';
import { setChkRequest, getChk } from 'redux/cartRedux';
import device from 'utils/device';

const ButtonPay = styled.button`
  border: 0;
  background: black;
  color: white;
  width: 258px;
  max-width: 100%;
  padding: 10px 15px;
  font-size: 22px;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: right;
  }
`;
const DotPay = ({ chk, setChk, currency, amount, description }) => {
  const url = `${BASE_URL}payment`;
  const currencyCode = currency.code;
  const options = {
    id: '728035',
    amount,
    currency: currencyCode,
    description,
    url,
    type: '4',
    bylaw: '1',
    personalData: '1',
    ignoreLastPaymentChannel: '1',
  };

  setChk(options);

  return (
    <>
      <FormContainer>
        <form action="https://ssl.dotpay.pl/test_payment/" method="post" target="_parent">
          <input name="description" value={description} type="hidden" />
          <input
            name="ignore_last_payment_channel"
            value={options.ignoreLastPaymentChannel}
            type="hidden"
          />
          <input type="hidden" name="type" value={options.type} />
          <input type="hidden" name="bylaw" value={options.bylaw} />
          <input type="hidden" name="personal_data" value={options.personalData} />
          <input name="url" value={options.url} type="hidden" />
          <input name="amount" value={amount} type="hidden" required />
          <input type="hidden" name="chk" value={chk} />
          <input type="hidden" name="currency" value={options.currency} />
          <input name="id" value={options.id} type="hidden" />
          <p>
            <br />
            <ButtonPay type="submit">Zapłać</ButtonPay>
          </p>
        </form>
        <br />
      </FormContainer>
    </>
  );
};
DotPay.defaultProps = {
  description: 'Oplacenie zamowienia',
};
DotPay.propTypes = {
  setChk: PropTypes.func.isRequired,
  chk: PropTypes.string.isRequired,
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string,
};

const mapStateToProps = state => ({
  chk: getChk(state),
});
const mapDispatchToProps = dispatch => ({
  setChk: options => dispatch(setChkRequest(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DotPay);
