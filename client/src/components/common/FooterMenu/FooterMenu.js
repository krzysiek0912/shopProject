import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import device from 'utils/device';

const MenuFooterContainer = styled(Col)`
  text-align: center;
`;
const ListLink = styled.ul`
  list-style: none;
  padding: 0;

  @media ${device.mobileM} {
    display: flex;
    justify-content: space-between;
    li:last-of-type a {
      padding-right: 0;
    }
    li:first-of-type a {
      padding-left: 0;
    }
  }

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

const FooterMenu = ({ links, location }) => (
  <MenuFooterContainer md={9}>
    <ListLink>
      {links.map(link => (
        <li key={link.id}>
          <Link className={(location.pathname === link.path && 'active') || ''} to={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </ListLink>
  </MenuFooterContainer>
);

FooterMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(props => <FooterMenu {...props} />);
