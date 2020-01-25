import axios from 'axios';
import { API_URL } from 'config';
import { startRequest, endRequest, errorRequest } from './requestRedux';

/* SELECTORS */
export const getValue = ({ cart }) => cart.value;
export const getChk = ({ cart }) => cart.chk;
export const getCartList = ({ cart }) => cart.cartList;
export const getArrayOfIds = ({ cart }) => cart.cartIds;
export const getCartCount = ({ cart }) => {
  return cart.cartList
    .map(item => item.count)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
export const getCartAmount = ({ cart }) => {
  return cart.cartList
    .map(item => item.count * item.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const SET_COUNT_PRODUCT = createActionName('SET_COUNT_PRODUCT');
export const SET_CHK = createActionName('SET_CHK');

/* ACTIONS */
export const addProductToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeProductFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const setCountProductInCart = payload => ({ payload, type: SET_COUNT_PRODUCT });
export const setChk = payload => ({ payload, type: SET_CHK });

const cart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
  cartList: cart,
  cartIds: cart.map(currentValue => {
    return currentValue._id;
  }),
  chk: '',
};

/* THUNKS */
export const setChkRequest = options => {
  return async dispatch => {
    dispatch(startRequest(reducerName));
    try {
      const res = await axios.get(`${API_URL}/chk`, {
        params: {
          options,
        },
      });
      dispatch(setChk(res.data));
      dispatch(endRequest(reducerName));
    } catch (e) {
      dispatch(errorRequest(e.message, reducerName));
    }
  };
};

export default function reducer(statePart = initialState, action = {}) {
  let curentCount = 0;
  switch (action.type) {
    case ADD_TO_CART:
      if (statePart.cartList[action.payload.product._id]) {
        curentCount = parseInt(statePart.cartList[action.payload.product._id].count, 2);
      }
      return {
        ...statePart,
        cartList: [
          ...statePart.cartList,
          {
            _id: action.payload.product._id,
            count: curentCount + action.payload.count,
            price: action.payload.price,
          },
        ],
        cartIds: [...statePart.cartIds, action.payload.product._id],
      };
    case REMOVE_FROM_CART:
      return {
        ...statePart,
        cartList: [...statePart.cartList.filter(element => !(element._id === action.payload))],
        cartIds: [...statePart.cartIds.filter(element => !(element === action.payload))],
      };
    case SET_COUNT_PRODUCT:
      return {
        ...statePart,
        cartList: statePart.cartList.map(item => {
          if (item._id === action.payload._id) return { ...item, count: action.payload.count };

          return item;
        }),
      };
    case SET_CHK:
      return {
        ...statePart,
        chk: action.payload,
      };
    default:
      return statePart;
  }
}
