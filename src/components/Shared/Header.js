import React from "react";
import styled from "styled-components";
import Hambuger from "./Hambuger";
import HeadTitle from "./HeadTitle";
import media from "styles/styles-utils";
import Nav from "./Nav";
import { Search } from "components/Search";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000;
`;

const NavBlock = styled.nav`
  display: none;
  ${media.tablet} {
    display: initial;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Hambuger />
      <HeadTitle />
      <NavBlock>
        <Nav />
      </NavBlock>
      <Search />
    </HeaderBlock>
  );
};

export default Header;
