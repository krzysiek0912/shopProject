import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getCurrency } from 'redux/settingRedux';
import Price from 'components/common/Price/Price';
import ProductTitle from 'components/common/ProductTitle/ProductTitle';

const ProductContainer = styled.div`
  min-height: 500px;
  background: #f5f5f5;
  padding: 50px 0;
  text-align: center;
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

const Product = ({ currency, product }) => {
  return (
    <>
      {product._id && (
        <ProductContainer>
          {product.label !== '' && <ProductLabel>{product.label}</ProductLabel>}
          <ProductImage src={process.env.PUBLIC_URL + product.img} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>
              <Price currency={currency} price={product.price} />
            </ProductPrice>
          </ProductInfo>
        </ProductContainer>
      )}
      {!product._id && <div> Brak produktu</div>}
    </>
  );
};

Product.propTypes = {
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
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
