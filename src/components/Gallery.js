// Import Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import Components
import Character from "./Character";

// Set Styles
const StyledGallery = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  max-width: 48rem;
`;

// Export Component
export default function Gallery(props) {
  const { swData } = props;
  const [galleryContent, setGalleryContent] = useState(["LOADING"]);
  useEffect(() => {
    if (Array.isArray(swData)) {
      setGalleryContent(
        swData.map((character, i) => {
          return <Character key={i} characterData={character} />;
        })
      );
    } else if (Array.isArray(swData.results)) {
      setGalleryContent(
        swData.results.map((character, i) => {
          return <Character key={i} characterData={character} />;
        })
      );
    } else {
      setGalleryContent(["LOADING"]);
    }
  }, [swData]);

  return <StyledGallery>{galleryContent}</StyledGallery>;
}
