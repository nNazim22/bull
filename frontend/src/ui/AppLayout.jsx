import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import MessageBienvenue from "./MessageBienvenue";
import { useCart } from "../context/CartContext";
import SideCart from "./SideCart";
import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = styled.main`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const Div = styled.div`
  background-color: #0000006f;
  width: 100%;
  height: 100vh;
  position: fixed;

  top: 0;
  z-index: 60;
`;

export default function AppLayout() {
  const { openCart, isOpenCart } = useCart();

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover={false}
      />
      <MessageBienvenue />
      <NavBar />

      <Main>
        {openCart && <Div onClick={() => isOpenCart(!openCart)}></Div>}
        <Outlet />
        <SideCart open={openCart} />
        {/* {openCart && <SideCart open={openCart} />} */}
      </Main>
    </div>
  );
}
