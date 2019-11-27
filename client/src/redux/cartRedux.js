/* SELECTORS */
export const getValue = ({ cart }) => cart.value;
export const getCartList = ({ cart }) => cart.cartList;
export const getArrayOfIds = ({ cart }) => cart.cartIds;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const SET_COUNT_PRODUCT = createActionName('SET_COUNT_PRODUCT');

/* ACTIONS */
export const addProductToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeProductFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const setCountProductInCart = payload => ({ payload, type: SET_COUNT_PRODUCT });

const cart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
  cartList: cart,
  cartIds: cart.map(currentValue => {
    return currentValue._id;
  }),
  value: 0,
};
let curentCount = 0;
export default function reducer(statePart = initialState, action = {}) {
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
    default:
      return statePart;
  }
}
