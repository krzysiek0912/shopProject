import React from 'react';
import PropTypes from 'prop-types';

import MainMenu from 'components/common/MainMenu/MainMenu';
import 'bootstrap/js/src/collapse';

const BootstrapMenu = ({ links }) => (
  <>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
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
