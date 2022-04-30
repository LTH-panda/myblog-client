import { SearchBar } from "components/Search";
import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div``;

const AboutPageTemplate = ({ children }) => {
  return (
    <>
      <SearchBar />
      <TemplateBlock>{children}</TemplateBlock>
    </>
  );
};

export default AboutPageTemplate;
