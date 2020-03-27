import Container from 'react-bootstrap/Container';
import React from 'react';
import PaymentSucces from 'components/common/PaymentSucces/PaymentSucces';

const Payment = ({ location }) => {
    const searchParams = new URLSearchParams(location.search.slice(1));
    const status = searchParams.get('status');

    return <Container>{status.toLowerCase() === 'ok' ? <PaymentSucces /> : 'Error'}</Container>;
};

export default Payment;
