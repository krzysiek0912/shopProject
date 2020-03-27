import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { removeAllProductFromCart } from 'redux/cartRedux';

const Payment = ({ location, clearCart }) => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  const status = searchParams.get('status');

  useEffect(() => {
    clearCart();
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Płatność przyjęta`;
  });
  if (status === 'OK') return <div>Payment Succes</div>;
  return <Container>Payment Error</Container>;
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(removeAllProductFromCart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Payment);
