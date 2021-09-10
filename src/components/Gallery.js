// Import Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import Components
import Character from "./Character";
import LoadingScreen from "./Loading";

// Set Styles
const StyledGallery = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem auto;
  max-width: 48rem;
`;

const Gallery = (props) => {
  const { swData } = props;
  const [galleryContent, setGalleryContent] = useState([
    <LoadingScreen key={0} />,
  ]);

  useEffect(() => {
    if (swData) {
      setGalleryContent(
        swData.map((character, i) => {
          return <Character key={i} characterData={character} />;
        })
      );
    } else {
      setGalleryContent([<LoadingScreen key={0} />]);
    }
  }, [swData]);

  return <StyledGallery>{galleryContent}</StyledGallery>;
};

export default Gallery;
