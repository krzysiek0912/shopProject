import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSortOptions, setSortOptions } from 'redux/sortingRedux';
import 'globalstyle/__varible.scss';

const List = styled.ul`
  padding: 0 0 35px;
  list-style: none;
  border-bottom: 1px solid #b2b2b2;
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

const SortingList = ({ changeSorting }) => (
  <List>
    <ListItem onClick={() => changeSorting('name', 'asc')}>Nazwa A-Z</ListItem>
    <ListItem onClick={() => changeSorting('name', 'desc')}>Nazwa Z-A</ListItem>
    <ListItem onClick={() => changeSorting('price', 'asc')}>Cena rosnąco</ListItem>
    <ListItem onClick={() => changeSorting('price', 'desc')}>Cena malejąco</ListItem>
  </List>
);

SortingList.propTypes = {
  changeSorting: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sorting: getSortOptions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSorting: (key, direction) => dispatch(setSortOptions({ key, direction })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingList);
