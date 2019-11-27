import React from 'react';
import Row from 'react-bootstrap/Row';
import SingleProduct from 'components/features/SingleProduct/SingleProduct';
import { PropTypes } from 'prop-types';

const SingleProductPage = ({ match }) => {
  return (
    <Row>
      <SingleProduct id={match.params.id} />
    </Row>
  );
};

SingleProductPage.propTypes = {
  match: PropTypes.shape().isRequired,
};
export default SingleProductPage;
