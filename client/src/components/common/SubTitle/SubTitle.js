import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'globalstyle/__varible.scss';

const TitleH2 = styled.h2`
  margin: $base-size 0;
  font-size: 25px;
  font-weight: normal;
  position: relative;
  color: $color-text;
  padding-bottom: 10px;
  letter-spacing: 0.9px;
`;

const SubTitle = ({ children }) => <TitleH2>{children}</TitleH2>;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
