import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.black};
  div {
    padding: 2rem;
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme.white};
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Star Wars Character DB</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;
