import { AboutMeTemplate } from "components/Home";
import { WriteButton } from "components/Write";
import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";

const MainTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const MainTemplate = () => {
  return (
    <MainTemplateBlock>
      <WriteButton />
      <LogoutButton />
    </MainTemplateBlock>
  );
};

export default MainTemplate;
