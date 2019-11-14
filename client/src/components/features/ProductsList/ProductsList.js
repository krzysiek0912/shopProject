import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Product from 'components/features/Product/Product';

const ContainerProducts = styled.div`
  padding-left: 55px;
`;
const ProductList = ({ products }) => (
  <ContainerProducts>
    <section className="row">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  </ContainerProducts>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
