import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../constants/constants";

const Div = styled.div`
  /* background-color: red; */
  color: black;
  height: auto;
  border: 1px solid #f1f3f5;
  box-shadow: 3px 5px 12px #00000026;

  @media ${devices.md} {
    font-size: 1rem;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: all ease 0.3s;

  &:hover {
    transform: scale(0.95);
  }
`;

const A = styled(NavLink)`
  text-decoration: none;
`;

const H5 = styled.h5`
  font-size: 0.65rem;
`;

export default function CartProduct({ product }) {
  return (
    <A to={`/produits/${product._id}`}>
      <Div>
        <div>
          <Img src={product.Images[0]} alt="" />
        </div>
        <div className="info-product">
          <h4>{product.name}</h4>
          <H5>{product.desciption}</H5>
          <p>{product.price} DA</p>
          {/* <button> i</button> */}
        </div>
      </Div>
    </A>
  );
}
