import React from "react";
import styled from "styled-components";
import AboutPageTemplate from "./AboutPageTemplate";

const TemplateBlock = styled.div`
  padding: 1rem;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
