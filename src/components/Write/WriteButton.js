import Button from "components/Shared/Button";
import Link from "next/link";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const WriteButtonBlock = styled(Button)`
  width: 100%;
  background: ${OpenColor.indigo[5]};
  color: #fff;
`;

const WriteButton = () => {
  return (
    <Link href="/write">
      <a>
        <WriteButtonBlock>새 글 쓰기</WriteButtonBlock>
      </a>
    </Link>
  );
};

export default WriteButton;
