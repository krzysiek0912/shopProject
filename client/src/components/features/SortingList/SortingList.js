import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  getSortingOptions,
  setSortOptionsRequest,
  getPages,
  getProductsPerPage,
} from 'redux/settingRedux';
import 'globalstyle/__varible.scss';
import device from 'utils/device';

const List = styled.ul`
  padding: 0 0 35px;
  list-style: none;
  border-bottom: 1px solid #b2b2b2;
  display: flex;
  justify-content: space-around;
  @media ${device.tablet} {
    display: block;
  }
`;

const ListItem = styled.li`
  color: #000000;
  opacity: 0.7;
  padding: 10.8px 0;
  font-size: 18px;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const SortingList = ({ changeSorting, productsPerPage }) => (
  <List>
    <ListItem onClick={() => changeSorting(productsPerPage, { key: 'name', direction: 'asc' })}>
      Nazwa A-Z
    </ListItem>
    <ListItem onClick={() => changeSorting(productsPerPage, { key: 'name', direction: 'desc' })}>
      Nazwa Z-A
    </ListItem>
    <ListItem onClick={() => changeSorting(productsPerPage, { key: 'price', direction: 'asc' })}>
      Cena rosnąco
    </ListItem>
    <ListItem onClick={() => changeSorting(productsPerPage, { key: 'price', direction: 'desc' })}>
      Cena malejąco
    </ListItem>
  </List>
);

SortingList.propTypes = {
  changeSorting: PropTypes.func.isRequired,
  productsPerPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  sorting: getSortingOptions(state),
  pages: getPages(state),
  productsPerPage: getProductsPerPage(state),
});

const mapDispatchToProps = dispatch => ({
  changeSorting: (productsPerPage, sortingOption) =>
    dispatch(setSortOptionsRequest(productsPerPage, sortingOption)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingList);
