import React from "react";
import styled from "styled-components";
import HeadTitle from "./HeadTitle";
import { Search } from "components/Search";
import { useSelector } from "react-redux";
import { AdminProfile } from "components/Admin";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <HeaderBlock>
      <HeadTitle />
      <ActionBlock>
        {user && <AdminProfile />}
        <Search />
      </ActionBlock>
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
const ActionBlock = styled.div`
  display: flex;
  gap: 1rem;
`;
