import { styled } from "styled-components";

const Div = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export default function EmptyCart() {
  return (
    <Div>
      <p>Panier vide </p>
    </Div>
  );
}
