import Link from "next/link";
import OpenColor from "open-color";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavActive } from "store/ui";
import styled from "styled-components";

const Nav = () => {
  const { navActive } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const setActive = useCallback((id) => {
    dispatch(setNavActive({ id }));
  }, []);

  return (
    <NavBlock>
      <StyledList>
        <Link href="/" passHref>
          <a>
            <StyledLink
              onClick={() => setActive(0)}
              className={navActive === 0 && "active"}
            >
              About
            </StyledLink>
          </a>
        </Link>
        <Link href="/tech" passHref>
          <a>
            <StyledLink
              onClick={() => setActive(1)}
              className={navActive === 1 && "active"}
            >
              Tech
            </StyledLink>
          </a>
        </Link>{" "}
        <Link href="/start-up" passHref>
          <a>
            <StyledLink
              onClick={() => setActive(2)}
              className={navActive === 2 && "active"}
            >
              Start-Up
            </StyledLink>
          </a>
        </Link>{" "}
        <Link href="/log" passHref>
          <a>
            <StyledLink
              onClick={() => setActive(3)}
              className={navActive === 3 && "active"}
            >
              {" "}
              Log
            </StyledLink>
          </a>
        </Link>
      </StyledList>
    </NavBlock>
  );
};

export default Nav;

const NavBlock = styled.nav`
  padding: 2rem;
  padding-left: 0;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  .active {
    border-bottom: 3px solid ${OpenColor.indigo[5]};
    opacity: 1;
  }
`;

const StyledLink = styled.li`
  padding-bottom: 0.5rem;
  opacity: 0.5;
`;
