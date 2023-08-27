import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import { devices } from "../constants/constants";
import { getCart } from "../cart/cartSlice";
import { useSelector } from "react-redux";

const NavBarcomponents = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  /* background-color: black; */
  padding: 0.2rem;
  font-family: "Rubik", sans-serif;
  border-bottom: 0.5px solid #e5e6e8;
  @media ${devices.md} {
    justify-content: center;
    height: 5rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-right: 5rem;

  @media ${devices.md} {
    padding-right: 0;

    align-items: center;
    justify-content: space-between;

    height: 5rem;
  }
`;
const ListLinks = styled.li`
  list-style: none;
  position: relative;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #495057;
  font-size: 1.5rem;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #74b816;
  }

  @media ${devices.xs} {
    font-size: 1.2rem;
  }
`;

const Img = styled.img`
  margin: 0.5rem 0 0.5rem 5rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;

  @media ${devices.md} {
    display: none;
  }
`;
const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  cursor: pointer;

  @media ${devices.xs} {
    font-size: 1.2rem;
  }
`;

const NumberItem = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.65rem;
  font-weight: bold;
  background-color: #000000;
  color: white;
  height: 1rem;
  width: 1rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export default function NavBar() {
  const { openCart, isOpenCart } = useCart();

  const cart = useSelector(getCart);

  return (
    <NavBarcomponents>
      <Img src="/logo.jpg" alt="Logo" />
      <List>
        <ListLinks>
          <Link to="home">
            <HiOutlineHome />
          </Link>
        </ListLinks>
        <ListLinks>
          <Link to="produits">
            <HiOutlineShoppingCart />
          </Link>
        </ListLinks>
        <ListLinks onClick={() => isOpenCart(!openCart)}>
          {cart.length > 0 && <NumberItem>{cart.length}</NumberItem>}
          <Button>
            <HiOutlineShoppingBag />
          </Button>
        </ListLinks>
      </List>
    </NavBarcomponents>
  );
}
