import React from 'react';
import PropTypes from 'prop-types';
import { IonIcon } from 'react-svg-ionicons';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

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

const MainMenu = ({ links, location }) => (
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ListLink className="navbar-nav ml-auto">
      {links.map(link => (
        <li key={link.id}>
          <Link className={(location.pathname === link.path && 'active') || ''} to={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </ListLink>
    <Link to="/cart">
      <IonIcon name="cart" size="large" strokeWidth={3} />
    </Link>
  </div>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(props => <MainMenu {...props} />);
