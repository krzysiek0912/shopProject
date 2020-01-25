import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'globalstyle/__varible.scss';

const TitleH1 = styled.h1`
  margin-bottom: 40px;
  font-size: 35px;
  font-weight: bold;
  position: relative;
  color: $color-text;
  padding-bottom: 10px;
  letter-spacing: 0.9px;
  text-align: center;
  border-bottom: 1px solid #6c757d;
`;

const SubTitle = ({ children }) => <TitleH1>{children}</TitleH1>;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
