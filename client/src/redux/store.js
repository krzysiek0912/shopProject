import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import products from 'redux/productsRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
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
