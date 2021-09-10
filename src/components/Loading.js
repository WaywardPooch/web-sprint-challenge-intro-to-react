import React from "react";
import styled from "styled-components";

const StyledLoadArea = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32rem;
  width: 100%;
  h1 {
    color: ${(props) => props.theme.white};
    font-size: 5rem;
  }
`;

const LoadingScreen = () => {
  return (
    <StyledLoadArea>
      <h1>LOADING</h1>
    </StyledLoadArea>
  );
};

export default LoadingScreen;
