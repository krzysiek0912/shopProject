import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import SingleProduct from 'components/views/SingleProduct/SingleProduct';
import Home from 'components/views/Home/Home';
import Cart from 'components/views/Cart/Cart';
import User from 'components/views/User/User';
import NoMatch from 'components/views/NoMatch/NoMatch';

import 'globalstyle/index.scss';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/user" component={User} />
          <Route component={NoMatch} />
        </AnimatedSwitch>
      </Switch>
    </MainLayout>
  );
};

export default App;
