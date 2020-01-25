import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import HtmlBox from 'components/common/HtmlBox/HtmlBox';
import Price from 'components/common/Price/Price';
import cutText from 'utils/cutText';
import device from 'utils/device';
import { getCartList, setCountProductInCart, removeProductFromCart } from 'redux/cartRedux';

const CartImgContainer = styled.div`
  padding: 15px 0;
  background: #f5f5f5;
  img {
    max-width: 100%;
  }
`;
const StyledRow = styled(Row)`
  padding-bottom: 15px;
  align-items: center;
`;

const CartProductTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 18px;
`;
const ContentContainer = styled(HtmlBox)`
  font-size: 18px;
`;
const ChangeCountContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
`;

const InputCount = styled.input`
  width: 40px;
  height: 50px;
  text-align: center;
  background: #f5f5f5;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

const ButtonRemove = styled.button`
  font-size: 14px;
  width: 100%;
  text-align: center;
  color: red;
  border: 0;
  background: none;
  @media ${device.tablet} {
    text-align: right;
  }
`;
const ButtonChangeCount = styled.button`
  background: none;
  border: none;
  display: inline-block;
  font-weight: normal;
  font-size: 24px;
  padding: 10px;
`;
const ColPrice = styled(Col)`
  font-size: 18px;
  opacity: 0.7;
  align-self: center;
  text-align: center;
`;
const ColAction = styled(Col)`
  margin-top: 35px;
`;

const CartItem = ({ item, currency, setCount, removeFromCart }) => {
  const [count, setCountState] = useState(item.count);
  const handlerChangeInput = e => {
    const inputValue = e.target.value * 1;
    if (inputValue < 1) return;
    const { _id } = item;
    setCount({ _id, count: inputValue });
    setCountState(e.target.value);
  };
  const handlerAdd = () => {
    const { _id } = item;
    const newValue = count * 1 + 1;
    setCount({ _id, count: newValue });
    setCountState(newValue);
  };

  const handlerSub = () => {
    const { _id } = item;
    const newValue = count * 1 - 1;
    if (newValue < 1) return;
    setCount({ _id, count: newValue });
    setCountState(newValue);
  };

  const handlerRemove = () => {
    const { _id } = item;
    removeFromCart(_id);
  };

  return (
    <StyledRow>
      <Col sm={6} md={2}>
        <CartImgContainer>
          <img src={process.env.PUBLIC_URL + item.img} alt="" />
        </CartImgContainer>
      </Col>
      <Col sm={6} md={10}>
        <Row>
          <Col md={7} lg={{ span: 7, offset: 1 }}>
            <Link to={`${process.env.PUBLIC_URL}/product/${item._id}`}>
              <CartProductTitle>{item.name}</CartProductTitle>
            </Link>
            <ContentContainer>{cutText(item.content, 150)}</ContentContainer>
          </Col>
          <ColPrice xs={6} md={2}>
            <Price currency={currency} price={item.price} />
          </ColPrice>
          <ColAction xs={6} md={3} lg={2}>
            <ChangeCountContainer>
              <ButtonChangeCount type="button" onClick={handlerSub}>
                -
              </ButtonChangeCount>{' '}
              <InputCount type="number" onChange={handlerChangeInput} value={count} />
              <ButtonChangeCount type="button" onClick={handlerAdd}>
                +
              </ButtonChangeCount>
              szt
            </ChangeCountContainer>
            <ButtonRemove type="button" onClick={handlerRemove}>
              usuń produkt
            </ButtonRemove>
          </ColAction>
        </Row>
      </Col>
    </StyledRow>
  );
};

CartItem.propTypes = {
  setCount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = state => ({
  cartList: getCartList(state),
});
const mapDispatchToProps = dispatch => ({
  setCount: newValue => dispatch(setCountProductInCart(newValue)),
  removeFromCart: id => dispatch(removeProductFromCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartItem);
