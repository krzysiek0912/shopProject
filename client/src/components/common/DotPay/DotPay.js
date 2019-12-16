import React from 'react';
import PropTypes from 'prop-types';
import Sha256 from 'utils/hash';
import styled from 'styled-components';
import { BASE_URL } from 'config';

// import { DOTPAY_ID } from 'config';
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
  justify-content: right;
`;
const DotPay = ({ currency, amount, description = 'Oplacenie zamowienia' }) => {
  const pin = 'M4XE5CmgebT664YnqeiAwFuqh1WzGS38';
  const id = '728035';
  const url = `${BASE_URL}/payment`;
  const type = '4';
  const bylaw = '1';
  const personalData = '1';
  const ignoreLastPaymentChannel = '1';
  const chk = Sha256(
    `${pin}${id}${amount}${currency}${description}${url}${type}${bylaw}${personalData}${ignoreLastPaymentChannel}`,
  );
  return (
    <>
      <FormContainer>
        <form action="https://ssl.dotpay.pl/test_payment/" method="post" target="_parent">
          <input name="description" value={description} type="hidden" />
          <input
            name="ignore_last_payment_channel"
            value={ignoreLastPaymentChannel}
            type="hidden"
          />
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="bylaw" value={bylaw} />
          <input type="hidden" name="personal_data" value={personalData} />
          <input name="url" value={url} type="hidden" />
          <input
            defaultValue="0"
            name="amount"
            id="kwota"
            size="6"
            value={amount}
            type="hidden"
            required
            pattern="^([1-9])((\.\d{1,2})?)$|^((?!0)(\d){1,5})((\.\d{1,2})?)$|^(1(\d{5}
,!)(.\d{1,2})?)$|^(200000(.[0]{1,2})?)$"
            placeholder="np. 10"
            maxLength="9"
            title="Kwota powinna mieścić się w przedziale 1 - 200 000 PLN. Dozwolony␣
,!format to np: 10 lub 10.00"
          />
          <input type="hidden" name="chk" value={chk} />
          <input type="hidden" name="currency" value={currency} />
          <input name="id" value={id} type="hidden" />
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

DotPay.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default DotPay;
