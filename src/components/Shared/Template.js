import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Template = ({ children }) => {
  return (
    <TemplateBlock>
      <Nav />
      {children}
    </TemplateBlock>
  );
};

export default Template;

const TemplateBlock = styled.main`
  padding: 1rem;
`;
