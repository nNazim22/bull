import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "../cart/cartSlice";

const Div = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 12px;
`;

const Inp = styled.input`
  width: 2rem;
  text-align: center;
  /* padding: 0.8rem 2rem 0.8rem 2rem; */
  padding: ${(props) => props.inppadding};
  background-color: #f1f3f5;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
`;
const Div2 = styled.div`
  position: relative;
`;
const Div3 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #f1f3f5;
  border: 1px solid #f1f3f5;
  border-radius: 8px;
`;
const Button = styled.button`
  /* padding: 12px; */
  padding: ${(props) => props.buttonpadding};

  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f1f3f5;
  border: 1px solid #f1f3f5;
`;

export default function InpIncreesDec({
  setQuantity,
  quantity,
  buttonpadding,
  inppadding,
  item,
}) {
  const dispatch = useDispatch();

  const { itemId } = item;
  function handleInc(e) {
    e.preventDefault();
    setQuantity((pre) => pre + 1);
    dispatch(increaseItemQuantity(itemId));
    console.log(itemId);
  }

  function handleDec(e) {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
      dispatch(decreaseItemQuantity(itemId));
    }
  }

  return (
    <Div>
      <Div2>
        <Div3>
          <Button
            buttonpadding={buttonpadding}
            onClick={handleDec}
            disabled={quantity === 1}
          >
            -
          </Button>

          <Inp
            inppadding={inppadding}
            type="number"
            value={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              if (!isNaN(newQuantity) && newQuantity >= 1) {
                setQuantity(newQuantity);
              }
            }}
            disabled
          />
          <Button buttonpadding={buttonpadding} onClick={handleInc}>
            +
          </Button>
        </Div3>
      </Div2>
    </Div>
  );
}
