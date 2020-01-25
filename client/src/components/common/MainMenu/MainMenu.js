import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { IonIcon } from 'react-svg-ionicons';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getCartCount } from 'redux/cartRedux';

const ColapseContainer = styled.div`
  text-align: center;
`;
const ListLink = styled.ul`
  a {
    font-family: 'PT Sans', sans-serif;
    text-transform: uppercase;

    padding: ${props => (props.padding ? props.padding : '0 17.8px;')};
    color: #000000;
    opacity: 0.5;
    letter-spacing: 6.2px;
    &:hover {
      color: #000000;
      opacity: 1;
    }
  }
`;
const LinkToCart = styled(Link)`
  position: relative;
`;
const CartCount = styled.span`
  background: #ee5253;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -6px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const CartIcon = styled(IonIcon)`
  &:hover {
    color: #ee5253;
  }
`;

const MainMenu = ({ links, location, cartCount }) => (
  <ColapseContainer className="collapse navbar-collapse" id="navbarResponsive">
    <ListLink className="navbar-nav ml-auto">
      {links.map(link => (
        <li key={link.id}>
          <Link className={(location.pathname === link.path && 'active') || ''} to={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </ListLink>
    <LinkToCart to="/cart">
      {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
      <CartIcon name="cart" size="large" strokeWidth={3} />
    </LinkToCart>
  </ColapseContainer>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cartCount: PropTypes.number.isRequired,
  location: PropTypes.shape().isRequired,
};
const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(MainMenu);
