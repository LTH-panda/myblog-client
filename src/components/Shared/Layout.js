import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutBlock>
      <Header />
      {children}
    </LayoutBlock>
  );
};

export default Layout;

const LayoutBlock = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;
