import { SearchBar } from "components/Search";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  background: ${OpenColor.indigo[3]};
  height: 20vh;
  color: #fff;
  padding: 1rem;
`;

const AboutPageTemplate = ({ children }) => {
  return (
    <>
      <SearchBar />
      <TemplateBlock>{children}</TemplateBlock>
    </>
  );
};

export default AboutPageTemplate;
