import React from "react";
import styled from "styled-components";
import HeadTitle from "./HeadTitle";
import { Search } from "components/Search";

const Header = () => {
  return (
    <HeaderBlock>
      <HeadTitle />
      <Search />
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0.5rem;
`;
