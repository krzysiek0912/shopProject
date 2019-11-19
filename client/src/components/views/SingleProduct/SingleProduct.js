import React from 'react';
import SingleProduct from 'components/features/SingleProduct/SingleProduct';
import { PropTypes } from 'prop-types';

const SingleProductPage = ({ match }) => <SingleProduct id={match.params.id} />;

SingleProductPage.propTypes = {
  match: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default SingleProductPage;
