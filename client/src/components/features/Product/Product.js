import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import { getCurrency } from 'redux/productsRedux';
import ProductTitle from 'components/common/ProductTitle/ProductTitle';

const ProductContainer = styled.div`
  min-height: 500px;
  background: #f5f5f5;
  padding: 50px 0;
  text-align: center;
`;
const HalfColumn = styled.div`
  margin-bottom: 20px;
`;
const ProductLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 38px;
  font-size: 18px;
  letter-spacing: 0.4px;
`;
const ProductImage = styled.img`
  max-width: 100%;
`;
const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 28px 25px;
  font-size: 18px;
  text-align: left;
`;
const ProductPrice = styled.div`
  letter-spacing: 0.4px;
  opacity: 0.7;
`;

const Product = ({ currency, product }) => (
  <Col sm={6} as={HalfColumn}>
    <Link to={`/product/${product._id}`}>
      <ProductContainer>
        {product.label !== '' && <ProductLabel>{product.label}</ProductLabel>}
        <ProductImage src={process.env.PUBLIC_URL + product.img} alt={product.name} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>
            {currency}
            {product.price}
          </ProductPrice>
        </ProductInfo>
      </ProductContainer>
    </Link>
  </Col>
);

Product.defaultProps = {
  currency: '$',
};

Product.propTypes = {
  currency: PropTypes.string,
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

export default connect(mapStateToProps)(Product);
