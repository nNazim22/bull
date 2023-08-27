import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const SpinnerCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid #3498db;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite,
    ${shimmerAnimation} 2s linear infinite;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.1),
    transparent
  );
  background-size: 200% 200%;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};

export default Spinner;
