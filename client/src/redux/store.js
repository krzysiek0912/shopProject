import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import products from 'redux/productsRedux';
import request from 'redux/requestRedux';
import setting from 'redux/settingRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
  request,
  setting,
});

// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
