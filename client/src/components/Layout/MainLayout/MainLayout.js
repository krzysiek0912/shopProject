import React from 'react';
import Header from 'components/layout/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
