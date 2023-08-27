import { styled } from "styled-components";
import CartProduct from "../ui/CartProduct";
import { devices } from "../constants/constants";

const ProductPage = styled.div`
  margin: 3rem;
  font-family: "Rubik", sans-serif;
  color: #3b4146;
  @media ${devices.md} {
    margin: 1rem 2px 2px 0;
  }
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 5rem;

  @media ${devices.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
    margin: 1.4rem auto;
    gap: 1rem;
  }
  @media ${devices.sm} {
    grid-template-columns: 1fr;
    gap: 1.3rem;

    margin: 1rem;
  }
`;

export default function Product({ products }) {
  return (
    <div>
      <ProductPage>
        <h1>Produits</h1>
        <Main>
          {products.map((product) => (
            <CartProduct product={product} key={product._id} />
          ))}
        </Main>
      </ProductPage>
    </div>
  );
}
