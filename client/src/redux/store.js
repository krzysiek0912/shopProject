import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import products from 'redux/productsRedux';
import cart from 'redux/cartRedux';
import request from 'redux/requestRedux';
import setting from 'redux/settingRedux';

const localStorageMiddleware = ({ getState }) => {
  // <--- FOCUS HERE
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

// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, localStorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
