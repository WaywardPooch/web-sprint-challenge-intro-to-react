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
  const { characterData } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <StyledCharacter>
      <h2>{characterData.name}</h2>
      {showDetails ? (
        <>
          <CharacterInfo characterData={characterData} />
          <button onClick={() => setShowDetails(!showDetails)}>
            Hide Info
          </button>
        </>
      ) : (
        <button onClick={() => setShowDetails(!showDetails)}>
          See details
        </button>
      )}
    </StyledCharacter>
  );
};

export default Character;
