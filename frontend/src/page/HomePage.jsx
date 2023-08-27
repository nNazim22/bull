import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../constants/constants";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  gap: 10px;
`;
const Div2 = styled.div`
  /* padding: 2rem; */
  position: relative;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all ease 0.3s;
  filter: grayscale(40%);

  &:hover {
    transform: scale(0.996);
  }
`;
const Home = styled.div`
  background-color: #fff;
  font-family: "Rubik", sans-serif;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 1rem;
  border: 1px solid #f1f3f558;
  border-radius: 2px;
  color: #f1f3f5;
  font-size: 1rem;
  font-weight: 600;
  background-color: #b7b7b757;
  transition: all ease 0.3s;
  margin: 2rem;

  &:hover {
    background-color: #f1f3f558;
    color: #f8f9fa;
  }
  @media ${devices.sm} {
    padding: 0.5rem;
  }
`;

const Divbtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
`;

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/image/home-1.jpg",
    "/image/home-3.jpg",
    "/image/home-2.jpg",
  ];

  useEffect(() => {
    if (currentIndex < images.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200); // Changez le délai en millisecondes selon vos préférences

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images]);

  return (
    <Home>
      <Div2>
        <Div>
          {images.map((image, index) => (
            <Img
              key={index}
              src={image}
              alt={`/image/home-${index + 1}.jpg`}
              className={`fade-in-image ${currentIndex >= index ? "show" : ""}`}
            />
          ))}
        </Div>
        <Divbtn>
          <Link to="/produits">Nos produits</Link>
        </Divbtn>
      </Div2>
    </Home>
  );
}
