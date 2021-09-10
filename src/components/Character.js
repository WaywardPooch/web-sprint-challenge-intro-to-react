import React, { useState } from "react";
import styled from "styled-components";

import CharacterInfo from "./CharacterInfo";

const StyledCharacter = styled.div`
  background-color: #eeeeee88;
  border-bottom: solid 2px black;
  width: 100%;
  padding: 1rem 0;
  h2 {
    font-size: 3rem;
  }
`;

const Character = (props) => {
  const { characterData, focusedCharacter, setFocusedCharacter, id } = props;

  return (
    <StyledCharacter>
      <h2>{characterData.name}</h2>
      {focusedCharacter === id ? (
        <CharacterInfo
          id={id}
          height={characterData.height}
          mass={characterData.mass}
          hair_color={characterData.hair_color}
          skin_color={characterData.skin_color}
          eye_color={characterData.eye_color}
          birth_year={characterData.birth_year}
          gender={characterData.gender}
        />
      ) : (
        <button onClick={setFocusedCharacter(id)}>See more</button>
      )}
    </StyledCharacter>
  );
};

export default Character;
