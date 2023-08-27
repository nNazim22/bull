import { styled } from "styled-components";
import { devices } from "../constants/constants";

const H1 = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background-color: #a9e34b;
  color: #fff;
  padding: 0.4rem;
  @media ${devices.xs} {
    font-size: 0.5rem;
    text-align: center;
  }
`;
export default function MessageBienvenue() {
  return <H1>BIENVENUE, NOUS SOMMES LÀ POUR VOUS SERVIR</H1>;
}
