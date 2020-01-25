import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const ColSpiner = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const PendingSpiner = () => (
  <ColSpiner className="text-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </ColSpiner>
);

export default PendingSpiner;
