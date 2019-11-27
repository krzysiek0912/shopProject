import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import HtmlBox from 'components/common/HtmlBox/HtmlBox';
import cutText from 'utils/cutText';
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
  justify-content: flex-end;
  align-items: center;
`;

const InputCount = styled.input`
  width: 40px;
`;

const ButtonRemove = styled.button`
  font-size: 14px;
  width: 100%;
  text-align: right;
  color: red;
  border: 0;
  background: none;
`;
const ColPrice = styled(Col)`
  font-size: 18px;
  opacity: 0.7;
  margin-top: 35px;
`;
const ColAction = styled(Col)`
  margin-top: 60px;
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
      <Col xs={2}>
        <CartImgContainer>
          <img src={process.env.PUBLIC_URL + item.img} alt="" />
        </CartImgContainer>
      </Col>
      <Col xs={{ span: 6, offset: 1 }}>
        <Link to={`${process.env.PUBLIC_URL}/product/${item._id}`}>
          <CartProductTitle>{item.name}</CartProductTitle>
        </Link>
        <ContentContainer>{cutText(item.content, 150)}</ContentContainer>
      </Col>
      <ColPrice xs={1}>{currency + item.price}</ColPrice>
      <ColAction xs={2}>
        <ChangeCountContainer>
          <button type="button" onClick={handlerSub}>
            -
          </button>{' '}
          <InputCount type="number" onChange={handlerChangeInput} value={count} />
          <button type="button" onClick={handlerAdd}>
            +
          </button>
          szt
        </ChangeCountContainer>
        <ButtonRemove type="button" onClick={handlerRemove}>
          usuń produkt
        </ButtonRemove>
      </ColAction>
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
  currency: PropTypes.string.isRequired,
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
