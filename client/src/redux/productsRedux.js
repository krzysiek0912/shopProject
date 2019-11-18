import axios from 'axios';
import { API_URL } from 'config';
import { startRequest, endRequest, errorRequest } from './requestRedux';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;

export const getProductsSort = ({ products, setting }) => {
  const { sorting } = setting;
  const sortedProducts = [...products.data].sort((a, b) => {
    if (a[sorting.key] > b[sorting.key]) return sorting.direction === 'asc' ? 1 : -1;
    if (a[sorting.key] < b[sorting.key]) return sorting.direction === 'asc' ? -1 : 1;
    return 0;
  });
  return sortedProducts;
};

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');

/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest(reducerName));
    try {
      const res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest(reducerName));
    } catch (e) {
      dispatch(errorRequest(e.message, reducerName));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage, sortingOption) => {
  return async dispatch => {
    dispatch(startRequest(reducerName));
    const { key, direction } = sortingOption;
    let orderLink = '';
    let orderByLink = '';
    if (key) orderLink = `/${key}`;
    if (direction) orderByLink = `/${direction}`;
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;
      const res = await axios.get(
        `${API_URL}/products/range/${startAt}/${limit}${orderLink}${orderByLink}`,
      );

      dispatch(
        loadProductsByPage({
          products: res.data.products,
          amount: res.data.amount,
        }),
      );
      dispatch(endRequest(reducerName));
    } catch (e) {
      dispatch(errorRequest(e.message, reducerName));
    }
  };
};

const initialState = {
  data: [],
  singleProduct: {},
  amount: 0,
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        data: [...action.payload.products],
        amount: action.payload.amount,
      };
    default:
      return statePart;
  }
}
