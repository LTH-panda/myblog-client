import Link from "next/link";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  flex: 1;
  font-family: "yg-jalnan";
  font-size: 1.5rem;
  color: ${OpenColor.indigo[5]};
`;

const HeadTitle = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Title>고래고래</Title>
        </a>
      </Link>
    </>
  );
};

export default HeadTitle;
