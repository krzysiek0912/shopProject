import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

import { getProductsSort, loadProductsRequest } from 'redux/productsRedux';
import Product from 'components/features/Product/Product';

const ContainerProducts = styled.div`
  padding-left: 55px;
`;

class ProductsList extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;

    loadProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <ContainerProducts>
        <Row>
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </ContainerProducts>
    );
  }
}

ProductsList.propTypes = {
  loadProducts: PropTypes.func.isRequired,
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
const mapDispatchToProps = dispatch => ({
  loadProducts: (page, postsPerPage) => dispatch(loadProductsRequest(page, postsPerPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);
