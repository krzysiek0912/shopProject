import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'globalstyle/__varible.scss';
import device from 'utils/device';

const TitleH2 = styled.h2`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: normal;
  position: relative;
  color: $color-text;
  padding-bottom: 0;
  letter-spacing: 0.9px;
  text-align: center;
  @media ${device.tablet} {
    margin: $base-size 0;
    padding-bottom: 10px;
    text-align: left;
  }
`;

const SubTitle = ({ children }) => <TitleH2>{children}</TitleH2>;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
