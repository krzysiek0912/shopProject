import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { removeAllProductFromCart } from 'redux/cartRedux';
import styled from 'styled-components';

const CircleStyled = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    border: 5px solid green;
    background: lightgreen;
    position: relative;
    margin: 0 auto;
`;
const CheckStyled = styled.div`
    width: 70px;
    height: 50px;
    border-right: 10px solid green;
    border-top: 10px solid green;
    transform: rotate(135deg);
    display: inline-block;
    font-style: normal;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -20px;
    border-radius: 5px;
`;
const MessageStyled = styled.div`
    width: 100%;
    font-weight: bold;
    text-align: center;
    color: green;
    margin: 25px auto;
    font-size: 24px;
`;

const PaymentSucces = ({ location, clearCart }) => {
    useEffect(() => {
        clearCart();
        document.title = `Płatność przyjęta`;
    });
    return (
        <Container>
            <CircleStyled>
                <CheckStyled />
            </CircleStyled>
            <MessageStyled>Twoje zamówienie zostało przyjęte</MessageStyled>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(removeAllProductFromCart()),
});

export default connect(
    null,
    mapDispatchToProps,
)(PaymentSucces);
