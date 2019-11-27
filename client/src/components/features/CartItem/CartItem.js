import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import HtmlBox from 'components/common/HtmlBox/HtmlBox';
import { getCartList } from 'redux/cartRedux';

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

const CartItem = ({ item }) => {
  return (
    <StyledRow>
      <Col xs={2}>
        <CartImgContainer>
          <img src={process.env.PUBLIC_URL + item.img} alt="" />
        </CartImgContainer>
      </Col>
      <Col xs={{ span: 6, offset: 1 }}>
        <Link to={`${process.env.PUBLIC_URL}/product/${item._id}`}>{item.name}</Link>
        <HtmlBox>{item.content}</HtmlBox>
      </Col>
      <Col xs={1}>{item.price}</Col>
      <Col xs={2}>
        +<input type="number" value={item.count} />- szt
      </Col>
    </StyledRow>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
};
const mapStateToProps = state => ({
  cartList: getCartList(state),
});

export default connect(mapStateToProps)(CartItem);
