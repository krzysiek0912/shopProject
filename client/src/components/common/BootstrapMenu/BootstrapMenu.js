import React from 'react';
import PropTypes from 'prop-types';

import MainMenu from 'components/common/MainMenu/MainMenu';
import 'bootstrap/js/src/collapse';
import styled from 'styled-components';

const ToggleButton = styled.button`
  &.navbar-toggler {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  .navbar-toggler-icon.shop-toggler {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`;

const BootstrapMenu = ({ links }) => (
  <>
    <ToggleButton
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon shop-toggler" />
    </ToggleButton>
    <MainMenu links={links} />
  </>
);

BootstrapMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BootstrapMenu;
