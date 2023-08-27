import { useNavigation, useParams } from "react-router";
import products from "../data/product";
import { styled } from "styled-components";
import ImageGallery from "../ui/ImageScrool";
import InputQuntity from "../ui/InputQuntity";
import { devices } from "../constants/constants";
import { useEffect, useState } from "react";
import { addItem } from "../cart/cartSlice";
import { useCart } from "../context/CartContext";
import axios from "axios";
import Spinner from "../ui/Spinner";

const ProductPage = styled.div`
  margin: 2rem;
`;
const Desciption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  /* justify-content: center; */
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 5rem;
  @media ${devices.xl} {
    grid-template-columns: 1fr;
    margin: auto;
    width: 100%;
  }
`;

const Paragraphs = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bolder;
`;
// const Img = styled.img`
//   height: 55vh;
//   width: 100%;
//   object-fit: contain;
// `;

const Form = styled.form`
  display: flex;
  height: auto;
  flex-direction: column;
  margin: 2rem;
  align-items: start;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1.3rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  background-color: #f1f3f5;
  outline: none;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
`;

const Select = styled.select`
  text-align: center;
  margin: 0.5rem;
  border: 1px solid #f1f3f5;
  padding: 0.3rem;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  background-color: white;
  border: 2px solid #f1f3f5;
  color: black;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  padding: 1.3rem;
  width: 100%;
  margin: 2rem;
  transition: all ease 0.5s;

  &:hover {
    background-color: #fdfdfd;
  }
`;

const Total = styled.div`
  margin-top: 2rem;
`;

export default function Product() {
  const [product, setProduct] = useState([]);
  const { dispatch } = useCart();
  const { id: productId } = useParams();

  useEffect(() => {
    // Faites défiler la page vers le haut lorsque le composant est monté
    window.scrollTo({ top: 0 });

    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState("");
  const [taille, setTaille] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { _id: itemId, name, Images, price: unitPrice } = product;
  const [totalPrice, setTotalPrice] = useState(unitPrice);

  useEffect(() => {
    setTotalPrice(unitPrice);
  }, [unitPrice, quantity]); // This will update totalPrice whenever unitPrice or quantity changes

  useEffect(() => {
    // Update 'taille' state with the first value from 'product.tailles'
    if (product && product.tailles && product.tailles.length > 0) {
      setTaille(product.tailles[0]);
    }
  }, [product]);

  function handleAddToCart(e) {
    e.preventDefault();
    const newItem = {
      itemId,
      name,
      image: Images[0],
      quantity,
      unitPrice,
      totalPrice: totalPrice * quantity,
      nom,
      numero,
      taille,
    };
    dispatch(addItem(newItem));
  }

  if (!product) return <Spinner />;

  return (
    <ProductPage>
      <Div>
        <div>
          {product && product.Images && (
            <ImageGallery images={product.Images} />
          )}
        </div>
        <Desciption>
          <h1>{product.name}</h1>
          <Paragraphs>{product.desciption}</Paragraphs>
          <div>
            <Form action="">
              <label htmlFor="">Donner le nom de votre choix : </label>
              <Input
                type="text"
                name="nameP"
                id=""
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <label htmlFor="">Donner le numero de votre choix : </label>
              <Input
                type="number"
                name="numberP"
                id=""
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />

              <div>
                <label htmlFor="">choisisez votre taille : </label>
                {product && product.tailles && product.tailles.length > 0 && (
                  <Select
                    value={taille}
                    onChange={(e) => setTaille(e.target.value)}
                  >
                    {product.tailles.map((t) => (
                      <option value={t} key={t}>
                        {t}
                      </option>
                    ))}
                  </Select>
                )}
              </div>

              <div>
                <label htmlFor="">Quantité : </label>
                <InputQuntity
                  setQuantity={setQuantity}
                  quantity={quantity}
                  buttonpadding={"12px"}
                  inppadding={" 0.8rem 2rem 0.8rem 2rem"}
                />
              </div>

              <Total>
                Prix Total : <strong>{totalPrice * quantity} DA</strong>
              </Total>

              <Button onClick={handleAddToCart}>Ajouter a la cart</Button>
            </Form>
          </div>
        </Desciption>
      </Div>
    </ProductPage>
  );
}
