/* SELECTORS */
export const getProducts = ({ products }) => products.products;
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

const initialState = {
  products: [
    {
      id: 1,
      img: '/assets/shoes.jpg',
      category: 'Sporting Goods',
      price: '$69.00',
      label: 'Nowość',
      stocked: true,
      name: 'Produkt 1',
    },
    {
      id: 2,
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      price: '$159.00',
      label: 'Ostatnia Sztuka',
      stocked: true,
      name: 'Produkt 2',
    },
    {
      id: 3,
      img: '/assets/notes.jpg',
      category: 'Sporting Goods',
      price: '$215.00',
      stocked: false,
      name: 'Produkt 3',
    },
    {
      id: 4,
      img: '/assets/gamepad.jpg',
      category: 'Electronics',
      price: '$59.00',
      stocked: true,
      name: 'Produkt 4',
    },
    {
      id: 5,
      img: '/assets/notes.jpg',
      category: 'Electronics',
      price: '$399.00',
      stocked: false,
      name: 'Produkt 5',
    },
    {
      id: 6,
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Produkt 6',
    },
  ],
  productsInCard: {},
  amount: 6,
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
