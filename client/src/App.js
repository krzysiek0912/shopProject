import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layout/MainLayout/MainLayout';
import Root from 'components/views/Root/Root';
import Home from 'components/views/Home/Home';
import User from 'components/views/User/User';
import NoMatch from 'components/views/NoMatch/NoMatch';

import 'globalstyle/index.scss';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/root" component={Root} />
        <Route exact path="/user" component={User} />
        <Route component={NoMatch} />
      </Switch>
    </MainLayout>
  );
};

export default App;
