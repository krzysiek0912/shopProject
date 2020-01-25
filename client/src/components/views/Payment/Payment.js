import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Payment = ({ location }) => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  const status = searchParams.get('status');

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Płatność sukcess`;
  });
  if (status === 'OK') return <div>Payment Succes</div>;
  return <Container>Payment Error</Container>;
};

export default Payment;
