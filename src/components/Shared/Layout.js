import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutBlock = styled.div``;

const Layout = ({ children }) => {
  return (
    <LayoutBlock>
      <Header />
      {children}
    </LayoutBlock>
  );
};

export default Layout;
