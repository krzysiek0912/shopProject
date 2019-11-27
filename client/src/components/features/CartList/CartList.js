import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { API_URL } from 'config';

import CartItem from 'components/features/CartItem/CartItem';
import { getCartList, getArrayOfIds } from 'redux/cartRedux';

const CartList = ({ cartIdList, cartList }) => {
  const [cart, setCartData] = useState({ items: [], isFetching: false });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setCartData({ items: cart.items, isFetching: true });
        const response = await axios.get(`${API_URL}/cart`, {
          params: {
            productsIdList: cartIdList,
          },
        });
        setCartData({ items: response.data, isFetching: false });
      } catch (e) {
        setCartData({ items: cart.items, isFetching: false });
      }
    };
    fetchUsers();
  }, [cart.items, cartIdList]);

  const ItemsList = cart.items.map(item => {
    const curentProductObj = cartList.filter(product => product._id === item._id)[0];
    const { count } = curentProductObj;
    return <CartItem key={item._id} count={count} item={item} />;
  });
  return <>{ItemsList.length === 0 ? <>koszyk jest pusty</> : ItemsList}</>;
};

CartList.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
  cartIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  cartList: getCartList(state),
  cartIdList: getArrayOfIds(state),
});

export default connect(mapStateToProps)(CartList);
