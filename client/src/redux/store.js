import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import products from 'redux/productsRedux';
import cart from 'redux/cartRedux';
import request from 'redux/requestRedux';
import setting from 'redux/settingRedux';

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartList));
    return result;
  };
};

// combine reducers
const rootReducer = combineReducers({
  products,
  cart,
  request,
  setting,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// create store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, localStorageMiddleware)),
);

export default store;
