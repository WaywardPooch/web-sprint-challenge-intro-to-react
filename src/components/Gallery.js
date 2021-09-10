// Libraries
import React from "react";
import styled from "styled-components";

// Constants
import { MAX_PAGE_ENTRIES } from "../constants";

// Components
import Character from "./Character";

// Styles
const StyledGallery = styled.section`
  background-color: #eee;
`;

export default function Gallery() {
  const galleryEntries = [];

  for (let i = 0; i < MAX_PAGE_ENTRIES; i++) {
    galleryEntries.push(<Character />);
  }

  return <StyledGallery>{galleryEntries}</StyledGallery>;
}
