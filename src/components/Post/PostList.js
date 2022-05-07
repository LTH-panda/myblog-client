import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import css from "styled-jsx/css";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <style jsx>{style}</style>
      <PostListBlock>
        {posts.map((post) => (
          <Link
            href={{ pathname: `${path}/[id]`, query: { id: post._id } }}
            key={post._id}
            passHref
          >
            <a className="flex-link">
              <PostListItem
                title={post.title}
                content={
                  post.content.length > 50
                    ? post.content.slice(0, 50) + "..."
                    : post.content
                }
                date={post.date}
              />
            </a>
          </Link>
        ))}
      </PostListBlock>
    </>
  );
};

export default PostList;

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;
const style = css`
  .flex-link {
    flex: 0 0 100%;
  }
  @media (min-width: 764px) {
    .flex-link {
      flex-basis: 48%;
    }
  }
  @media (min-width: 1024px) {
    .flex-link {
      flex-basis: 31%;
    }
  }
`;
