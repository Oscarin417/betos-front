import React, { useContext } from "react"
import styled from "styled-components"
import { DataContext } from "./DataContext"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const CartTotalContainer = styled.div`
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TotalAmount = styled.h3`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CartTotal = () => {
  const clientId = "Aa6AFIn6iTgPSwmIVb4ckrLDF9oBaEQOhgsLUPgahHVeuRGw-VA3P36pj1r-i_AeSfTLtB-UxtZuo3ur"
  const { cart } = useContext(DataContext);
  const total = cart.reduce((acc, el) => acc + el.precio * el.quanty, 0)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      console.log("pago realizado: ", details)
    });
  };

  return (
    <CartTotalContainer>
      <TotalAmount>Total a pagar: ${total}</TotalAmount>
      <PayPalScriptProvider options={{ "client-id": clientId }}>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </CartTotalContainer>
  );
};

export default CartTotal
