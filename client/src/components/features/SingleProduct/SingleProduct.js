import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import NoMatch from 'components/views/NoMatch/NoMatch';
import PendingSpiner from 'components/common/PendingSpiner/PendingSpiner';
import SubTitle from 'components/common/SubTitle/SubTitle';
import HtmlBox from 'components/common/HtmlBox/HtmlBox';
import Price from 'components/common/Price/Price';
import { getSingleProduct, loadSingleProductRequest } from 'redux/productsRedux';
import { getCartList, addProductToCart, removeProductFromCart } from 'redux/cartRedux';
import { getCurrency } from 'redux/settingRedux';
import { getRequest } from 'redux/requestRedux';

const ProductImgContainer = styled.div`
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
  state = {
    inCart: false,
  };

  componentDidMount() {
    const { loadSingleProduct, id, cartList } = this.props;
    loadSingleProduct(id);
    const result = cartList.find(product => product._id === id);
    if (result) {
      this.setState({
        inCart: true,
      });
    }
  }

  handlerAddToCart = () => {
    const { addToCart, singleProduct } = this.props;
    const cartItem = {
      product: singleProduct,
      count: 1,
      price: singleProduct.price,
    };

    addToCart(cartItem);

    this.setState({
      inCart: true,
    });
  };

  handlerRemoveFromCart = () => {
    const { removeFromCart, singleProduct } = this.props;

    removeFromCart(singleProduct._id);

    this.setState({
      inCart: false,
    });
  };

  render() {
    const { handlerAddToCart, handlerRemoveFromCart } = this;
    const { singleProduct, request, currency } = this.props;
    const { inCart } = this.state;
    const { pending } = request.products;

    return (
      <Container>
        {(pending && <PendingSpiner />) ||
          (singleProduct._id && (
            <Row>
              <Col xs={5}>
                <ProductImgContainer>
                  {singleProduct.label !== '' && <ProductLabel>{singleProduct.label}</ProductLabel>}
                  <ProductImage
                    src={process.env.PUBLIC_URL + singleProduct.img}
                    alt={singleProduct.name}
                  />
                </ProductImgContainer>
              </Col>
              <Col xs={7}>
                <ProductInfo>
                  <SubTitle>{singleProduct.name}</SubTitle>
                  <ProductPrice>
                    <Price currency={currency} price={singleProduct.price} />
                    <HtmlBox>{singleProduct.content}</HtmlBox>
                    {(!inCart && (
                      <Button onClick={handlerAddToCart} variant="dark">
                        Dodaj do koszyka
                      </Button>
                    )) || (
                      <Button onClick={handlerRemoveFromCart} variant="warning">
                        Usuń z koszyka
                      </Button>
                    )}
                  </ProductPrice>
                </ProductInfo>
              </Col>
            </Row>
          )) || <NoMatch />}
      </Container>
    );
  }
}

SingleProduct.defaultProps = {
  cartList: [],
};
SingleProduct.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  loadSingleProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  singleProduct: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string,
    category: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  request: PropTypes.shape({
    products: PropTypes.shape({
      success: PropTypes.bool,
      pending: PropTypes.bool,
      error: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      count: PropTypes.number,
    }),
  ),
};

const mapStateToProps = state => ({
  singleProduct: getSingleProduct(state),
  cartList: getCartList(state),
  currency: getCurrency(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: cartItem => dispatch(addProductToCart(cartItem)),
  removeFromCart: id => dispatch(removeProductFromCart(id)),
  loadSingleProduct: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(props => <SingleProduct {...props} />));
