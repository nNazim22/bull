import { styled } from "styled-components";
import { useCart } from "../context/CartContext";
import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import OrderCart from "./OrderCart";
import { devices } from "../constants/constants";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
// import { Scrollbar } from "react-scrollbars-custom";
const Div = styled.div`
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0px 8px 5px #0000004a;
  width: 33%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: transform 0.3s linear;
  z-index: 100;
  font-family: "Rubik", sans-serif;

  @media ${devices.xl} {
    width: 40%;
  }
  @media ${devices.lg} {
    width: 50%;
  }
  @media ${devices.md} {
    width: 60%;
  }
  @media ${devices.sm} {
    width: 85%;
  }
  @media ${devices.xs} {
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

const HeadCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin: 1.2rem;
`;

const ScroolBox = styled.div`
  position: fixed;
  overflow-y: scroll;
  overflow-x: clip;
  height: 70vh;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CheckButton = styled.button`
  display: block;
  position: fixed;
  bottom: 0;
  margin: 1rem;
  width: 80%;
  padding: 1.5rem;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
`;

export default function SideCart({ open }) {
  const { openCart, isOpenCart } = useCart();
  const [Total, setTotal] = useState(0);

  const cart = useSelector(getCart);

  useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach((item) => {
      calculatedTotal += item.totalPrice;
    });
    setTotal(calculatedTotal);
  }, [cart]);

  return (
    <Div open={open}>
      <div>
        <HeadCart>
          <div>
            <h1>Votre cart</h1>
          </div>
          <Button
            onClick={() => {
              isOpenCart(!openCart);
            }}
          >
            <HiXMark />
          </Button>
        </HeadCart>
        <TotalPrice>
          <p>Total: {Total} DA</p>
        </TotalPrice>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ScroolBox>
              {cart.map((item) => (
                <OrderCart item={item} key={item.name} />
              ))}
            </ScroolBox>
            <ButtonDiv>
              <CheckButton>Terminer la command</CheckButton>
            </ButtonDiv>
          </>
        )}
      </div>
    </Div>
  );
}
