import { useSelector } from "react-redux";
import Card from "./components/Card";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useCartQuery } from "../../features/cart/api";

const Container = styled.div`
  display: flex;
  gap:8px;
  border-radius: 5px;
  padding: 16px;
  justify-content: space-between;
  background-color: #fafafa;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  padding: 8px;
  box-sizing: border-box;
  height: 216px;
`;
const OderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderSpan = styled.span`
  font-size: 14px;
  color: #616161;
`;

const VoucherDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  border-radius: 5px;
  border: 1px solid rgba(97, 97, 97, 0.25);
  position: relative;
  grid-area: menuSearch;
`;
const VoucherSearcher = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 16px;
  color: black;
  &::placeholder {
    color: #616161;
  }
`;
const ApplyBtn = styled.button`
  font-size: 14px;
  height: 30px;
  padding: 0 19px;
  border: none;
  outline: none;
  background-color: #25A5D8;
  border-radius: 0px 5px 5px 0px;
  color: white;
`;
const CheckOutBtn = styled.button`
  font-size: 12px;
  height: 30px;
  padding: 0 19px;
  border: none;
  outline: none;
  background-color: #e43003;
  border-radius: 0px 5px 5px 0px;
  color: white;
`;
const Cart = () => {
  const { carts } = useSelector((state) => state.cart);
  const userid = useSelector((state) => state.auth.userid);
  useCartQuery({ userid });

  useEffect(() => {
    console.log("carts", carts);
    console.log(userid);
  });

  return (
    <div className="container">
      <Container >
      <LeftSide>
        {carts &&
          carts.map((cart) => (
            <Card
              key={cart.id}
              id={cart.cartid}
              discount={cart.discount}
              name={cart.name}
              price={cart.price}
              quantity={cart.quantity}
            />
          ))}
      </LeftSide>
      <RightSide>
        <OrderSpan style={{fontSize:'16px',fontWeight:700}}>
        Order Summary
          </OrderSpan>
        <OderGroup>
          <OrderSpan>Subtotal</OrderSpan>
          <OrderSpan>10</OrderSpan>
        </OderGroup>
        <OderGroup>
          <OrderSpan>Shipping Fee</OrderSpan>
          <OrderSpan>5</OrderSpan>
        </OderGroup>
        <VoucherDiv>
          <VoucherSearcher type="text" placeholder="Enter Voucher Code" />
          <ApplyBtn>Apply</ApplyBtn>
        </VoucherDiv>
        <OderGroup>
          <OrderSpan style={{fontSize:'16px',fontWeight:700}}>
          Total
          </OrderSpan>
          <OrderSpan style={{fontSize:'16px',fontWeight:700}}>
          100
          </OrderSpan>
        </OderGroup>
        <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
      </RightSide>
    </Container>
    </div>
    
  );
};

export default Cart;
