import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PostList = () => {
  return (
    <PostListBlock>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </PostListBlock>
  );
};

export default PostList;
