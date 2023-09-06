import React from 'react';
import styled, { keyframes } from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const RotateAndScaleAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.5);

  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.5);

  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const RotatingScalingImage = styled.img`
  width: 200px;
  height: 200px;
  animation: ${RotateAndScaleAnimation} 10s linear infinite;
  border: none;
`;

function App() {
  return (
    <AppWrapper>
      <RotatingScalingImage src="/ring.png" alt="Rotating Scaling Image" />
    </AppWrapper>
  );
}

export default App;
