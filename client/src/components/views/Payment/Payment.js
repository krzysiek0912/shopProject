import React, { useEffect } from 'react';

const Payment = ({ location }) => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  const status = searchParams.get('status');

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Kliknięto  razy`;
  });
  if (status === 'OK') return <div>Payment Succes</div>;
  return <div>Payment Error</div>;
};

export default Payment;
