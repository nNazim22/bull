import { styled } from "styled-components";

import { useState } from "react";
import InpIncreesDec from "./InpIncreesDec";

const Div = styled.div`
  width: 100%;
  margin: 1.3rem;
  padding: 1rem;
  display: flex;
  grid-template-columns: 0.2fr 1fr;
`;

const Div2 = styled.div`
  /* height: 50px; */
  display: flex;
  align-items: center;
  gap: 12px;
  /* justify-content: space-between; */
`;

const Img = styled.img`
  width: 100px;
`;

const InfoItem = styled.div`
  margin: 0rem 0.8rem;
  width: 60%;
  line-height: 1.3rem;
`;

const H4 = styled.h4`
  text-align: center;

  margin: 1rem;
`;

const Order = styled.div`
  border-bottom: 1px solid #dbdcdc;
`;

function OrderCart({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <Order>
      <Div>
        <div>
          <Img src={item.image} alt="" />
        </div>
        <InfoItem>
          <h3>{item.name}</h3>
          <p>Nom : {item.nom}</p>
          <p>Numero : {item.numero}</p>
          <p>Taille : {item.taille}</p>

          <Div2>
            <label>Quantité : </label>
            <InpIncreesDec
              item={item}
              setQuantity={setQuantity}
              quantity={quantity}
              buttonpadding={"3px"}
              inppadding={"0.3rem 1rem 0.3rem 1rem"}
            />
          </Div2>
        </InfoItem>
      </Div>
      <H4>Prix : {item.totalPrice} DA</H4>
    </Order>
  );
}

export default OrderCart;
