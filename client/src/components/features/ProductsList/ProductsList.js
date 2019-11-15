import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { getProductsSort } from 'redux/productsRedux';
import Product from 'components/features/Product/Product';

const ContainerProducts = styled.div`
  padding-left: 55px;
`;
const ProductsList = ({ products }) => (
  <ContainerProducts>
    <section className="row">
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </section>
  </ContainerProducts>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  products: getProductsSort(state),
});

export default connect(mapStateToProps)(ProductsList);
