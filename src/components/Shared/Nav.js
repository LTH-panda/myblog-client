import useSidebar from "hooks/useSidebar";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const NavBlock = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  ${(props) =>
    css`
      flex-direction: ${props.direction};
    `}
`;
const StyledLink = styled.li``;

const Nav = ({ direction }) => {
  const { handleSidebar } = useSidebar();

  return (
    <NavBlock direction={direction}>
      <Link href="/tech">
        <a onClick={handleSidebar}>
          <StyledLink>Tech</StyledLink>
        </a>
      </Link>{" "}
      <Link href="/start-up">
        <a onClick={handleSidebar}>
          <StyledLink>Start-Up</StyledLink>
        </a>
      </Link>{" "}
      <Link href="/log">
        <a onClick={handleSidebar}>
          <StyledLink>Log</StyledLink>
        </a>
      </Link>
    </NavBlock>
  );
};

export default Nav;
