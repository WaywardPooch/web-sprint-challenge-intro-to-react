// Import Libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Import Components
import Character from "./Character";

// Set Styles
const StyledGallery = styled.section``;

// Export Component
export default function Gallery(props) {
  const { swData } = props;
  const [galleryContent, setGalleryContent] = useState("Loading...");

  useEffect(() => {
    setGalleryContent(
      swData.map((character, i) => {
        return <Character key={i} characterData={character} />;
      })
    );
  }, [swData]);

  return <StyledGallery>{galleryContent}</StyledGallery>;
}
