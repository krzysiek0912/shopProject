import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import NoMatch from 'components/views/NoMatch/NoMatch';
import ProductTitle from 'components/common/ProductTitle/ProductTitle';
import HtmlBox from 'components/common/HtmlBox/HtmlBox';
import { getSingleProduct, loadSingleProductRequest } from 'redux/productsRedux';
import { getCurrency } from 'redux/settingRedux';
import { getRequest } from 'redux/requestRedux';

const ProductImgContainer = styled.div`
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
  font-size: 18px;
`;
const ProductPrice = styled.div`
  letter-spacing: 0.4px;
  opacity: 0.7;
`;

class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadSingleProduct, id } = this.props;
    loadSingleProduct(id);
  }

  render() {
    const { singleProduct, request, currency } = this.props;
    const { pending } = request.products;
    return (
      <div>
        {(pending && <Spinner />) ||
          (singleProduct._id && (
            <Container>
              <Row>
                <Col xs={5}>
                  <ProductImgContainer>
                    {singleProduct.label !== '' && (
                      <ProductLabel>{singleProduct.label}</ProductLabel>
                    )}
                    <ProductImage
                      src={process.env.PUBLIC_URL + singleProduct.img}
                      alt={singleProduct.name}
                    />
                  </ProductImgContainer>
                </Col>
                <Col xs={7}>
                  <ProductInfo>
                    <ProductTitle>{singleProduct.name}</ProductTitle>
                    <ProductPrice>
                      {currency}
                      {singleProduct.price}
                      <HtmlBox>{singleProduct.content}</HtmlBox>
                    </ProductPrice>
                  </ProductInfo>
                </Col>
              </Row>
            </Container>
          )) || <NoMatch />}
      </div>
    );
  }
}

SingleProduct.propTypes = {
  loadSingleProduct: PropTypes.func.isRequired,
  singleProduct: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  request: PropTypes.shape({
    products: PropTypes.shape({
      success: PropTypes.bool,
      pending: PropTypes.bool,
      error: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  singleProduct: getSingleProduct(state),
  currency: getCurrency(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSingleProduct: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(props => <SingleProduct {...props} />));
