import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  font-size: 2rem;
  padding: 2rem;
`;

const CharacterInfo = (props) => {
  const {
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props.characterData;

  return (
    <StyledDetails>
      <p>Gender: {gender}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
    </StyledDetails>
  );
};

export default CharacterInfo;
