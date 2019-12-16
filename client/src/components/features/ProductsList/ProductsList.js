import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { getRequest } from 'redux/requestRedux';
import { getProductsSort, loadProductsByPageRequest } from 'redux/productsRedux';
import {
  getPages,
  getCurentPages,
  getProductsPerPage,
  getSortingOptions,
  setPaginationPage,
} from 'redux/settingRedux';
import Product from 'components/features/Product/Product';
import Pagination from 'components/common/Pagination/Pagination';

const ContainerProducts = styled(Row)`
  padding-left: 55px;
`;
const HalfColumn = styled.div`
  margin-bottom: 20px;
`;

class ProductsList extends React.Component {
  componentDidMount() {
    const { loadProductsByPage, presentPage = 1, productsPerPage, sortingOptions } = this.props;

    loadProductsByPage(presentPage, productsPerPage, sortingOptions);
  }

  loadProductsPage = page => {
    const { loadProductsByPage, productsPerPage, sortingOptions, setPage } = this.props;
    setPage(page);
    loadProductsByPage(page, productsPerPage, sortingOptions);
  };

  render() {
    const { loadProductsPage } = this;
    const { products, request, pages, presentPage } = this.props;
    const { success, pending, error } = request.products;
    return (
      <ContainerProducts>
        {(success &&
          products.map(product => (
            <Col key={product._id} sm={6} as={HalfColumn}>
              <Link to={`/product/${product._id}`}>
                <Product product={product} />
              </Link>
            </Col>
          ))) ||
          (pending && (
            <Col>
              <Spinner animation="border" />
            </Col>
          )) || (
            <Col>
              <Alert variant="danger"> {error} </Alert>
            </Col>
          )}

        {success && pages > 1 && (
          <Col>
            <Pagination pages={pages} onPageChange={loadProductsPage} initialPage={presentPage} />
          </Col>
        )}
      </ContainerProducts>
    );
  }
}

ProductsList.propTypes = {
  loadProductsByPage: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  sortingOptions: PropTypes.shape().isRequired,
  request: PropTypes.shape({
    products: PropTypes.shape({
      success: PropTypes.bool,
      pending: PropTypes.bool,
      error: PropTypes.string,
    }),
  }).isRequired,
  pages: PropTypes.number.isRequired,
  presentPage: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  products: getProductsSort(state),
  request: getRequest(state),
  pages: getPages(state),
  productsPerPage: getProductsPerPage(state),
  presentPage: getCurentPages(state),
  sortingOptions: getSortingOptions(state),
});
const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, order, orderby) =>
    dispatch(loadProductsByPageRequest(page, productsPerPage, order, orderby)),
  setPage: page => dispatch(setPaginationPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);