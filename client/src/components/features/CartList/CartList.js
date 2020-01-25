import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { API_URL } from 'config';

import Price from 'components/common/Price/Price';
import CartItem from 'components/features/CartItem/CartItem';
import PendingSpiner from 'components/common/PendingSpiner/PendingSpiner';
import { getCartList, getCartAmount, getArrayOfIds } from 'redux/cartRedux';
import { getCurrency } from 'redux/settingRedux';
import DotPay from 'components/common/DotPay/DotPay';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-transform: uppercase;
  font-weight: bold;
`;

const CartList = ({ cartIdList, cartList, cartAmount, currency }) => {
  const [cart, setCartData] = useState({ items: [] });

  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setFetching(true);
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
  }, [cartIdList]);

  const ItemsList = cart.items.map(item => {
    const curentProduct = cartList.find(product => product._id === item._id);
    const count = curentProduct ? curentProduct.count : 1;
    const cartProduct = { ...item, count };

    return <CartItem key={item._id} item={cartProduct} currency={currency} />;
  });

  return (
    <>
      {(isFetching && <PendingSpiner />) ||
        (ItemsList.length === 0 ? (
          <>koszyk jest pusty</>
        ) : (
          <>
            {ItemsList}
            <SummaryContainer>
              <input type="text" placeholder="KOD PROMOCYJNY" />
              <div>
                Do zapłaty <Price currency={currency} price={cartAmount} />
              </div>
            </SummaryContainer>
            <DotPay amount={cartAmount} currency={currency} />
          </>
        ))}
    </>
  );
};

CartList.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
  cartIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.shape({
    currencySite: PropTypes.string,
    humanCode: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  cartAmount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currency: getCurrency(state),
  cartList: getCartList(state),
  cartAmount: getCartAmount(state),
  cartIdList: getArrayOfIds(state),
});

export default connect(mapStateToProps)(CartList);
