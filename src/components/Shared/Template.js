import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.main`
  padding: 1rem;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
