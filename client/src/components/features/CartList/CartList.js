import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { API_URL } from 'config';

import CartItem from 'components/features/CartItem/CartItem';
import { getCartList, getArrayOfIds } from 'redux/cartRedux';

const CartList = ({ cartList }) => {
  const [cart, setCartData] = useState({ items: [] });
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setFetching(true);
      const cartIdList = cartList.map(currentValue => {
        return currentValue._id;
      });
      await axios
        .get(`${API_URL}/cart`, {
          params: {
            productsIdList: cartIdList,
          },
        })
        .then(resp => {
          setCartData({ items: resp.data });
          setFetching(false);
        })
        .catch(err => {
          setFetching(false);
          return err;
        });
    };
    fetchProducts();
  }, [cartList]);

  const ItemsList = cart.items.map(item => {
    const { count } = cartList.find(product => product._id === item._id);
    const cartProduct = { ...item, count };

    return <CartItem key={item._id} item={cartProduct} />;
  });

  return (
    <>
      {(isFetching && <Spinner animation="border" />) ||
        (ItemsList.length === 0 ? <>koszyk jest pusty</> : ItemsList)}
    </>
  );
};

CartList.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  cartList: getCartList(state),
  cartIdList: getArrayOfIds(state),
});

export default connect(mapStateToProps)(CartList);
