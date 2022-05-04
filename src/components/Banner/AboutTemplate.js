import { SearchBar } from "components/Search";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  background: ${OpenColor.indigo[3]};
  height: 15vh;
  color: #fff;
  padding: 1rem;
`;
const MainTitle = styled.h1``;
const SubTitle = styled.h4``;

const AboutTemplate = ({ children }) => {
  return (
    <>
      <SearchBar />
      <TemplateBlock>
        <MainTitle>Shout out to the world</MainTitle>
        <SubTitle>{children}</SubTitle>
      </TemplateBlock>
    </>
  );
};

export default AboutTemplate;
