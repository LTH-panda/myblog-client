import Link from "next/link";
import React from "react";
import styled from "styled-components";
import media from "styles/styles-utils";
import PostListItem from "./PostListItem";

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledAnchor = styled.a`
  cursor: pointer;
  width: 100%;
  ${media.tablet} {
    width: calc(100% / 2 - 2%);
  }

  ${media.desktop} {
    width: 20rem;
    height: 20rem;
    padding-top: 0;
  }
`;

const PostList = ({ posts }) => {
  return (
    <>
      <PostListBlock>
        {posts &&
          posts.map((post) => (
            <Link
              href={{ pathname: "tech/[id]", query: { id: post._id } }}
              key={post._id}
            >
              <StyledAnchor>
                <PostListItem
                  title={post.title}
                  content={post.content}
                  date={post.date}
                />
              </StyledAnchor>
            </Link>
          ))}
      </PostListBlock>
    </>
  );
};

export default PostList;
