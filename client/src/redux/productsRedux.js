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

const initialState = {
  data: [
    {
      _id: 'asdasad',
      img: '/assets/shoes.jpg',
      category: 'Sporting Goods',
      price: 69.0,
      label: 'Nowość',
      stocked: true,
      name: 'ZProdukt 1',
    },
    {
      _id: 'adsada',
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stocked: true,
      name: 'AProdukt 2',
    },
    {
      _id: 'asda',
      img: '/assets/notes.jpg',
      category: 'Sporting Goods',
      price: 215.0,
      stocked: false,
      name: 'Produkt 3',
    },
    {
      _id: 'adsdaaa',
      img: '/assets/gamepad.jpg',
      category: 'Electronics',
      price: 59.0,
      stocked: true,
      name: 'Produkt 4',
    },
    {
      _id: '5asad',
      img: '/assets/notes.jpg',
      category: 'Electronics',
      price: 399.0,
      stocked: false,
      name: 'Produkt 5',
    },
    {
      _id: '6asda',
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      price: 199.99,
      stocked: true,
      name: 'Produkt 6',
    },
  ],
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
