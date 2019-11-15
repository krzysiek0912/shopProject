import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import products from 'redux/productsRedux';
import sorting from 'redux/sortingRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
  sorting,
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
