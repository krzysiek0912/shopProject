import axios from 'axios';
import { API_URL } from 'config';
import { startRequest, endRequest, errorRequest } from './requestRedux';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getProductsSort = ({ products, sorting }) => {
  const sortedProducts = [...products.data].sort((a, b) => {
    if (a[sorting.key] > b[sorting.key]) return sorting.direction === 'asc' ? 1 : -1;
    if (a[sorting.key] < b[sorting.key]) return sorting.direction === 'asc' ? -1 : 1;
    return 0;
  });
  return sortedProducts;
};

export const getCurrency = ({ products }) => products.curency;

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest('requestProducts'));
    try {
      const res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest('requestProducts'));
    } catch (e) {
      dispatch(errorRequest(e.message, 'requestProducts'));
    }
  };
};

const initialState = {
  data: [],
  singleProduct: {},
  currency: '$',
  postsPerPage: 6,
  presentPage: 1,
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
}
