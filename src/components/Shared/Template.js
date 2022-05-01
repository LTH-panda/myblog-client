import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
