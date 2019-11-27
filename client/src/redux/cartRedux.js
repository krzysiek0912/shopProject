/* SELECTORS */
export const getValue = ({ cart }) => cart.value;
export const getCartList = ({ cart }) => cart.cartList;
export const getArrayOfIds = ({ cart }) =>
  cart.cartList.map(currentValue => {
    return currentValue._id;
  });

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* ACTIONS */
export const addProductToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeProductFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

const cart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
  cartList: cart,
  value: 0,
};
let curentCount = 0;
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      if (statePart.cartList[action.payload.product._id]) {
        curentCount = statePart.cartList[action.payload.product._id].count;
      }
      return {
        ...statePart,
        cartList: [
          ...statePart.cartList,
          {
            _id: action.payload.product._id,
            count: curentCount + action.payload.count,
          },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...statePart,
        cartList: statePart.cartList.filter(element => !(element._id === action.payload)),
      };
    default:
      return statePart;
  }
}
