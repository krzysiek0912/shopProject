import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'globalstyle/__varible.scss';

const TitleH3 = styled.h3`
  margin: $base-size 0;
  font-size: 18px;
  letter-spacing: 0.8px;
`;

const ProductTitle = ({ children }) => <TitleH3>{children}</TitleH3>;

ProductTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProductTitle;
