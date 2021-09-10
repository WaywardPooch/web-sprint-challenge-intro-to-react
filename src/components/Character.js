import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background-color: rgba(255, 255, 255, 100);
  border-bottom: solid 2px black;
  max-width: 48rem;
  padding: 1rem 0;
  h2 {
    font-size: 3rem;
  }
`;

export default function Character(props) {
  const { characterData } = props;

  return (
    <StyledCharacter>
      <h2>{characterData.name}</h2>
    </StyledCharacter>
  );
}
