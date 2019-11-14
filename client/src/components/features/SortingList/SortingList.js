import React from 'react';
import styled from 'styled-components';
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

const SortingList = () => (
  <List>
    <ListItem>Nazwa A-Z</ListItem>
    <ListItem>Nazwa Z-A</ListItem>
    <ListItem>Cena rosnąco</ListItem>
    <ListItem>Cena malejąco</ListItem>
  </List>
);

export default SortingList;
