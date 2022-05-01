import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import Nav from "./Nav";
import OpenColor from "open-color";
import HeadTitle from "./HeadTitle";
import media from "styles/styles-utils";
import { useDispatch, useSelector } from "react-redux";
import useSidebar from "hooks/useSidebar";

const HambugerBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;

  ${media.tablet} {
    display: none;
  }
`;

const Dimmed = styled.div`
  background-color: ${OpenColor.gray[6]};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const SideBarBlock = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  padding: 1rem;
  top: 0;
  left: 0;
  width: 270px;
  height: 100vh;
  background: #fff;
  z-index: 15;
`;

const SideBar = ({ open, handleSidebar }) => {
  if (open)
    return (
      <>
        <Dimmed onClick={handleSidebar} />
        <SideBarBlock>
          <HeadTitle onEvent={handleSidebar} />
          <Nav direction={"column"} />
        </SideBarBlock>
      </>
    );
};

const Hambuger = () => {
  const { sidebar, handleSidebar } = useSidebar();
  return (
    <>
      <HambugerBlock>
        <MdMenu onClick={handleSidebar} />
      </HambugerBlock>
      <SideBar open={sidebar} handleSidebar={handleSidebar} />
    </>
  );
};

export default Hambuger;
