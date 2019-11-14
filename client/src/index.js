import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layout/MainLayout/MainLayout';
import Root from 'components/views/Root/Root';
import Home from 'components/views/Home/Home';
import User from 'components/views/User/User';
import NoMatch from 'components/views/NoMatch/NoMatch';

import store from './redux/store';

import 'globalstyle/index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user" component={User} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
