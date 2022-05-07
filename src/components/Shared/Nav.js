import Link from "next/link";
import { useRouter } from "next/router";
import OpenColor from "open-color";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavActive } from "store/ui";
import styled from "styled-components";

const Nav = () => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const { navActive } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavActive({ path }));
  });

  return (
    <NavBlock>
      <StyledList>
        <Link href="/" passHref>
          <a>
            <StyledLink className={navActive === "" && "active"}>
              About
            </StyledLink>
          </a>
        </Link>
        <Link href="/tech" passHref>
          <a>
            <StyledLink className={navActive === "tech" && "active"}>
              Tech
            </StyledLink>
          </a>
        </Link>{" "}
        <Link href="/start-up" passHref>
          <a>
            <StyledLink className={navActive === "start-up" && "active"}>
              Start-Up
            </StyledLink>
          </a>
        </Link>{" "}
        <Link href="/log" passHref>
          <a>
            <StyledLink className={navActive === "log" && "active"}>
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
