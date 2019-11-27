import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layout/MainLayout/MainLayout';
import SingleProduct from 'components/views/SingleProduct/SingleProduct';
import Home from 'components/views/Home/Home';
import Cart from 'components/views/Cart/Cart';
import User from 'components/views/User/User';
import NoMatch from 'components/views/NoMatch/NoMatch';

import 'globalstyle/index.scss';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/user" component={User} />
        <Route component={NoMatch} />
      </Switch>
    </MainLayout>
  );
};

export default App;
