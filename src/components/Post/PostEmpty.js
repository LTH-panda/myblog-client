import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const PostEmpty = () => {
  return (
    <PostEmptyBlock>
      <EmptyMessage>게시글이 없습니다.</EmptyMessage>
    </PostEmptyBlock>
  );
};

export default PostEmpty;

const PostEmptyBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
`;
const EmptyMessage = styled.h1`
  color: ${OpenColor.gray[5]};
`;
