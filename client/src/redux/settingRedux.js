import { startRequest, endRequest, errorRequest } from './requestRedux';
import { loadProductsByPageRequest } from './productsRedux';

/* SELECTORS */
export const getSortingOptions = ({ setting }) => setting.sorting;
export const getCurrency = ({ setting }) => setting.curency;
export const getPages = ({ products, setting }) =>
  Math.ceil(products.amount / setting.pagination.productsPerPage);
export const getCurentPages = ({ setting }) => setting.pagination.presentPage;
export const getProductsPerPage = ({ setting }) => setting.pagination.productsPerPage;

// action name creator
const reducerName = 'setting';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_SORTING_OPTIONS = createActionName('SET_SORTING_OPTIONS');
export const SET_PAGINATION_OPTIONS = createActionName('SET_PAGINATION_OPTIONS');
export const SET_PAGINATION_PAGE = createActionName('SET_PAGINATION_PAGE');

/* ACTIONS */
export const setSortingOptions = payload => ({ payload, type: SET_SORTING_OPTIONS });
export const setPaginationOptions = payload => ({ payload, type: SET_PAGINATION_OPTIONS });
export const setPaginationPage = payload => ({ payload, type: SET_PAGINATION_PAGE });
/* THUNKS */
export const setSortOptionsRequest = (productsPerPage, options) => {
  return async dispatch => {
    dispatch(startRequest(reducerName));
    try {
      await dispatch(setSortingOptions(options));
      await dispatch(loadProductsByPageRequest(1, productsPerPage, options));
      dispatch(endRequest(reducerName));
    } catch (e) {
      dispatch(errorRequest(e.message, reducerName));
    }
  };
};

const initialState = {
  sorting: {
    direction: '',
    key: '',
  },
  currency: '$',
  pagination: {
    productsPerPage: 6,
    presentPage: 1,
  },
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SET_SORTING_OPTIONS:
      return {
        ...statePart,
        sorting: { key: action.payload.key, direction: action.payload.direction },
        pagination: {
          ...statePart.pagination,
          presentPage: 1,
        },
      };
    case SET_PAGINATION_OPTIONS:
      return {
        ...statePart,
        pagination: {
          productsPerPage: action.payload.productsPerPage,
          presentPage: action.payload.presentPage,
        },
      };
    case SET_PAGINATION_PAGE:
      return {
        ...statePart,
        pagination: {
          ...statePart.pagination,
          presentPage: action.payload,
        },
      };
    default:
      return statePart;
  }
}
